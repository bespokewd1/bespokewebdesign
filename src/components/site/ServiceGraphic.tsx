function WindowFrame() {
  return <><rect x="64" y="30" width="272" height="162" rx="7" className="graphic-paper graphic-line" /><path d="M64 52H336" className="graphic-line" /><circle cx="78" cy="41" r="3" className="graphic-blue" /><circle cx="89" cy="41" r="3" className="graphic-gold" /><circle cx="100" cy="41" r="3" className="graphic-green" /></>;
}

function House({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}><path d="M0 25L32 0L64 25V65H0Z" className="graphic-paper" /><path d="M-5 25L32-4L69 25" className="graphic-ink-stroke" /><rect x="25" y="39" width="15" height="26" className="graphic-blue" /><rect x="8" y="32" width="11" height="12" className="graphic-gold" /><rect x="46" y="32" width="11" height="12" className="graphic-gold" /></g>;
}

export function ServiceGraphic({ id }: { id: string }) {
  return <svg className={`service-graphic service-graphic-${id}`} viewBox="0 0 400 225" fill="none" aria-hidden="true" focusable="false">
    <rect width="400" height="225" className="graphic-ground" />
    {id === "website-development" && <>
      <WindowFrame />
      <rect x="79" y="66" width="110" height="6" rx="3" className="graphic-ink" />
      <rect x="79" y="88" width="125" height="10" rx="2" className="graphic-blue" />
      <rect x="79" y="104" width="98" height="10" rx="2" className="graphic-blue" />
      <path d="M79 128H185M79 137H170" className="graphic-line" />
      <rect x="79" y="153" width="76" height="20" rx="3" className="graphic-blue" />
      <rect x="221" y="65" width="100" height="112" rx="4" className="graphic-soft" /><House x={239} y={91} />
      <rect x="298" y="119" width="47" height="89" rx="6" className="graphic-ink" /><rect x="303" y="131" width="37" height="65" rx="2" className="graphic-paper" /><rect x="307" y="140" width="29" height="24" className="graphic-blue" /><path d="M308 175H335M308 183H327" className="graphic-line" />
    </>}
    {id === "seo" && <>
      <rect x="56" y="28" width="288" height="170" rx="7" className="graphic-paper graphic-line" />
      <rect x="69" y="41" width="130" height="144" rx="3" className="graphic-soft" />
      <path d="M70 75H199M70 127H199M112 41V185M161 41V185" className="graphic-map-road" />
      <path d="M85 160L137 109L187 68" className="graphic-blue-stroke" strokeDasharray="5 5" />
      <path d="M138 68C119 68 113 89 125 103L138 119L151 103C163 89 157 68 138 68Z" className="graphic-coral" /><circle cx="138" cy="87" r="7" className="graphic-paper" />
      <rect x="214" y="47" width="113" height="23" rx="4" className="graphic-soft" /><circle cx="226" cy="57" r="5" className="graphic-blue-stroke" /><path d="M230 61L234 65" className="graphic-blue-stroke" />
      <path d="M214 87H315M214 96H287" className="graphic-ink-stroke" />
      <rect x="214" y="113" width="37" height="34" rx="4" className="graphic-blue" /><path d="M262 121H323M262 132H305M214 164H320M214 175H296" className="graphic-line" />
      <circle cx="327" cy="189" r="20" className="graphic-green" /><path d="M317 189L324 196L337 182" className="graphic-paper-stroke" />
    </>}
    {id === "social-media" && <>
      <rect x="66" y="45" width="112" height="151" rx="6" className="graphic-paper graphic-line" /><circle cx="82" cy="60" r="6" className="graphic-blue" /><path d="M95 60H147" className="graphic-line" />
      <rect x="74" y="75" width="96" height="77" rx="3" className="graphic-soft" /><House x={90} y={84} />
      <path d="M79 163L84 168L89 163M102 163H118M79 182H152" className="graphic-coral-stroke" />
      <rect x="200" y="28" width="132" height="153" rx="6" className="graphic-paper graphic-line" /><circle cx="216" cy="44" r="6" className="graphic-green" /><path d="M230 44H302" className="graphic-line" />
      <rect x="208" y="60" width="116" height="82" rx="3" className="graphic-blue" /><path d="M236 89L258 69L287 96V128H236Z" className="graphic-paper" /><path d="M263 105L281 87M275 86L282 93" className="graphic-gold-stroke" /><path d="M212 155H302M212 165H285" className="graphic-line" />
      <path d="M166 36H181V21M182 21L173 30" className="graphic-blue-stroke" />
      <rect x="250" y="166" width="95" height="35" rx="5" className="graphic-green" /><path d="M266 184L271 189L282 178M291 179H332M291 188H319" className="graphic-paper-stroke" />
    </>}
    {id === "branding" && <>
      <rect x="67" y="37" width="214" height="140" rx="5" className="graphic-paper graphic-line" />
      <path d="M87 98L113 75L139 98V129H87Z" className="graphic-blue" /><path d="M105 128V109H120V128" className="graphic-paper-stroke" />
      <path d="M157 87H251M157 101H232M87 148H217" className="graphic-ink-stroke" />
      <rect x="89" y="164" width="217" height="42" rx="5" className="graphic-ink" /><rect x="100" y="175" width="34" height="20" rx="2" className="graphic-blue" /><rect x="143" y="175" width="34" height="20" rx="2" className="graphic-gold" /><rect x="186" y="175" width="34" height="20" rx="2" className="graphic-green" /><rect x="229" y="175" width="34" height="20" rx="2" className="graphic-coral" />
      <rect x="266" y="77" width="68" height="105" rx="4" className="graphic-blue" /><path d="M282 113L300 97L318 113V137H282Z" className="graphic-paper" /><path d="M282 151H319M282 160H310" className="graphic-paper-stroke" />
    </>}
    {id === "maintenance" && <>
      <WindowFrame />
      <rect x="81" y="69" width="112" height="100" rx="4" className="graphic-soft" /><House x={105} y={87} />
      <path d="M209 77H315M209 89H282" className="graphic-line" />
      {[112,137,162].map(y => <g key={y}><circle cx="218" cy={y} r="8" className="graphic-green" /><path d={`M214 ${y}L217 ${y+3}L222 ${y-3}`} className="graphic-paper-stroke" /><path d={`M237 ${y}H308`} className="graphic-line" /></g>)}
      <path d="M305 138L337 148V175C337 193 305 207 305 207C305 207 273 193 273 175V148Z" className="graphic-blue" /><path d="M290 171L302 183L322 160" className="graphic-paper-stroke" />
    </>}
  </svg>;
}