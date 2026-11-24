# Bespokewebdesign

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bespokewebdesign.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dd35e43f-a4a0-4f41-8d7d-b416b8f11be2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Media on Cloudflare

Lovable asset pointers in `src/assets/*.asset.json` use `/__l5e/assets-v1/` URLs.
The matching images and videos are committed under `public/__l5e/assets-v1/`
so the production build serves them on Cloudflare without Lovable's asset proxy.
Keep the pointers and public copies together.

After adding or replacing a Lovable asset, run `bun run assets:sync` and commit
the downloaded media along with its pointer. The sync command downloads missing
or size-mismatched files from the published Lovable site and checks their content
type and size. `bun run assets:check` verifies the copies without network access.
Both production build commands run this check before building, so missing media
cannot silently ship again. Deploy the generated Worker and its static asset
directory together.
