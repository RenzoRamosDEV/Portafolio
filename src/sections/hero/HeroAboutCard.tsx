import { PillButton } from '../../components/ui/PillButton'

export function HeroAboutCard() {
  return (
    <div className="bg-[#101010]/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 max-w-[650px] xl:max-w-[700px] border border-white/5 shadow-2xl">
      <p className="text-[#A7B4BC] text-sm sm:text-base mb-4 sm:mb-6 tracking-widest uppercase text-left font-bold">
        Un poco sobre mi
      </p>

      <div className="text-left text-sm sm:text-base leading-relaxed space-y-4 sm:space-y-6 text-[#A7B4BC]">
        <p>
          Desarrollador Junior de Aplicaciones Multiplataforma, especializado en Java y Spring Boot, enfocado en la creación de APIs robustas, escalables y mantenibles. Aplico principios de arquitectura limpia, buenas prácticas y diseño orientado al dominio para construir sistemas sólidos centrados en la lógica de negocio.
        </p>
        <p>
          Cuento además con experiencia en frontend y diseño gráfico, lo que me permite entender el producto de forma integral y facilitar la integración entre backend y UI/UX. Esto se traduce en soluciones más coherentes, eficientes y alineadas con la experiencia de usuario final.
        </p>
      </div>

      <p className="text-[#A7B4BC] text-sm sm:text-base mb-4 sm:mb-6 tracking-widest uppercase text-left mt-8 font-bold">
        Contactame
      </p>

      <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
        <PillButton label="GitHub" href="https://github.com/RenzoRamosDEV" external />
        <PillButton label="LinkedIn" href="https://www.linkedin.com/in/renzoinv04/" external />
        <PillButton label="Curriculum" disabled />
      </div>
    </div>
  )
}
