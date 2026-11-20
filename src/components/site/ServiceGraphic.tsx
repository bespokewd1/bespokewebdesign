export function ServiceGraphic({ id }: { id: string }) {
  return <svg className={`service-graphic service-emblem service-graphic-${id}`} viewBox="0 0 400 225" fill="none" aria-hidden="true" focusable="false">
    <rect width="400" height="225" className="emblem-background" />
    <path d="M0 225L126 0H173L47 225ZM303 225L400 53V107L334 225Z" className="emblem-stripes" />
    <path d="M37 45H87M37 45V72M313 180H363M363 180V153" className="emblem-detail" />
    <path d="M200 15L291 55V153L200 218L109 153V55Z" className="emblem-shadow" />
    <path d="M200 8L291 48V146L200 211L109 146V48Z" className="emblem-edge" />
    <path d="M200 17L282 54V142L200 200L118 142V54Z" className="emblem-face" />
    <path d="M200 17L282 54V142L200 200V17Z" className="emblem-face-shade" />
    <path d="M134 61L200 31L266 61M134 139L200 184L266 139" className="emblem-inlay" />
    {id === "website-development" && <>
      <rect x="142" y="66" width="116" height="78" rx="5" className="emblem-light" />
      <rect x="150" y="74" width="100" height="60" rx="2" className="emblem-dark" />
      <path d="M183 144V157H217V144M166 160H234" className="emblem-icon-line" />
      <path d="M178 91L166 104L178 117M222 91L234 104L222 117M205 89L195 119" className="emblem-icon-line" />
      <path d="M241 128L241 162L250 155L259 169L267 164L258 150L270 148Z" className="emblem-accent emblem-outline" />
    </>}
    {id === "seo" && <>
      <path d="M200 59C171 59 157 80 164 105C169 123 200 156 200 156C200 156 231 123 236 105C243 80 229 59 200 59Z" className="emblem-light" />
      <circle cx="200" cy="91" r="18" className="emblem-dark" />
      <path d="M190 94V86L200 78L210 86V99H190Z" className="emblem-accent" />
      <path d="M158 156L141 166L172 179H228L259 166L242 156M151 166H179M221 166H249" className="emblem-icon-line" />
      <path d="M246 70V53M237 61H255" className="emblem-accent-line" />
    </>}
    {id === "social-media" && <>
      <path d="M150 90H174L230 68V137L174 116H150Z" className="emblem-light" />
      <path d="M174 118L181 154H199L190 122" className="emblem-light" />
      <rect x="144" y="91" width="13" height="25" rx="3" className="emblem-accent" />
      <path d="M237 76V131M249 86L267 78M252 104H274M249 122L267 130" className="emblem-accent-line" />
      <path d="M153 163L174 172H219L240 163" className="emblem-inlay" />
      <path d="M160 70L171 59M155 56L163 48" className="emblem-icon-line" />
    </>}
    {id === "branding" && <>
      <path d="M200 57L238 114L200 158L162 114Z" className="emblem-light" />
      <path d="M200 58V111" className="emblem-dark-line" /><circle cx="200" cy="115" r="8" className="emblem-dark" />
      <path d="M173 158H227V174H173Z" className="emblem-accent" />
      <path d="M142 112V69H178M258 112V69H222" className="emblem-icon-line" />
      <rect x="136" y="106" width="12" height="12" className="emblem-light" /><rect x="252" y="106" width="12" height="12" className="emblem-light" />
      <circle cx="200" cy="45" r="7" className="emblem-accent" />
    </>}
    {id === "maintenance" && <>
      <path d="M169 62L190 65L203 84L223 96L244 100L237 121L249 141L227 148L213 166L194 153L172 153L170 131L153 115L168 99Z" className="emblem-light" />
      <circle cx="201" cy="114" r="27" className="emblem-dark" />
      <path d="M211 87C226 88 233 104 225 116L215 110L207 117L216 128L187 157L176 146L205 117C193 99 198 88 211 87Z" className="emblem-accent" />
      <path d="M146 69L154 76M249 65L241 74M149 154L157 146" className="emblem-icon-line" />
    </>}
    <path d="M70 108L77 97L84 108L77 119ZM316 108L323 97L330 108L323 119Z" className="emblem-accent" />
  </svg>;
}
