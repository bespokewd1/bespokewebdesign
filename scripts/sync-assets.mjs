import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Keep Lovable's pointers intact and mirror their media at the same public URLs.
const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");
const sourceOrigin = "https://bespokewebdesign.lovable.app";
const checkOnly = process.argv.includes("--check");
const pointerDir = path.join(root, "src", "assets");
const files = (await readdir(pointerDir)).filter((file) => file.endsWith(".asset.json"));
let downloaded = 0;
const failures = [];

for (const file of files) {
  try {
    const asset = JSON.parse(await readFile(path.join(pointerDir, file), "utf8"));
    if (!/^\/__l5e\/assets-v1\/[a-f0-9-]+\/[^/\\?#%]+$/.test(asset.url)) {
      throw new Error("Unsupported asset URL");
    }
    if (!Number.isSafeInteger(asset.size) || asset.size <= 0) {
      throw new Error("Invalid asset size");
    }
    const destination = path.join(publicDir, asset.url.slice(1));
    const existing = await stat(destination).catch((error) => {
      if (error.code !== "ENOENT") throw error;
      return undefined;
    });
    if (existing?.isFile() && existing.size === asset.size) continue;
    if (checkOnly) throw new Error("Public media missing or size differs; run bun run assets:sync");

    const response = await fetch(new URL(asset.url, sourceOrigin), {
      signal: AbortSignal.timeout(60_000),
    });
    if (!response.ok) throw new Error(`Download returned HTTP ${response.status}`);
    const contentType = response.headers.get("content-type")?.split(";")[0].trim();
    if (contentType !== asset.content_type) {
      throw new Error(`Expected ${asset.content_type}, received ${contentType}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length !== asset.size) {
      throw new Error(`Expected ${asset.size} bytes, received ${bytes.length}`);
    }
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
    downloaded++;
    console.log(`Downloaded ${asset.original_filename}`);
  } catch (error) {
    failures.push(`${file}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified ${files.length} public assets; downloaded ${downloaded}.`);
}
