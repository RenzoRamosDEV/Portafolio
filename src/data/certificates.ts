import springbootPreview from '../assets/certificates/cert-linkedin-springboot-preview.png'
import googlePreview from '../assets/certificates/cert-google-ia-preview.png'
import bigschoolPreview from '../assets/certificates/cert-bigschool-ia-preview.png'
import springbootPdf from '../assets/certificates/cert-linkedin-springboot.pdf'
import googlePdf from '../assets/certificates/cert-google-ia.pdf'
import bigschoolPdf from '../assets/certificates/cert-bigschool-ia.pdf'

export type CertificateItem = {
  title: string
  company: string
  period: string
  location: string
  credential: string
  pdf: string
  preview: string
  desc: string
}

export const certificateItems: CertificateItem[] = [
  {
    title: 'Certificado Spring Boot Esencial',
    company: 'LINKEDIN LEARNING',
    period: 'may. 2026',
    location: 'Online',
    credential: 'https://www.linkedin.com/learning/certificates/7b7c86e65a375f5a2e3f6dd941c68683bfbda364592dacc893275a5e0a80eef6?trk=share_certificate',
    pdf: springbootPdf,
    preview: springbootPreview,
    desc: 'Desarrollo de aplicaciones backend con Spring Boot, aplicando fundamentos, persistencia, seguridad y mensajería en un proyecto práctico.',
  },
  {
    title: 'Certificado Profesional de Inteligencia Artificial',
    company: 'GOOGLE',
    period: 'abr. 2026',
    location: 'Online',
    credential: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/XKQE5SSM3EDZ',
    pdf: googlePdf,
    preview: googlePreview,
    desc: 'Certificado profesional en Inteligencia Artificial emitido por Google. Aprendizaje de modelos de IA y mejores prácticas.',
  },
  {
    title: 'Certificado Desarrollo con Inteligencia Artificial',
    company: 'BIG SCHOOL',
    period: 'mar. 2026',
    location: 'Online',
    credential: 'https://media.licdn.com/dms/image/v2/D4E2DAQGBotbg0sY_KQ/profile-treasury-document-images_800/B4EZzn8Z1JIEAc-/1/1773417900843?e=1778112000&v=beta&t=f5m4BqHbkr3eO2EGxBbOv7tCLjrjbRbU5opU2NlnSiw',
    pdf: bigschoolPdf,
    preview: bigschoolPreview,
    desc: "Formación de 6 horas sobre el flujo de trabajo de 'cero a Producción'. Fundamentos para integrar modelos de IA en proyectos reales.",
  },
]
