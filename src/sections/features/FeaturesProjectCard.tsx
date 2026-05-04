import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { PillButton } from '../../components/ui/PillButton'
import bgHero from '../../assets/videos/bg-hero-light.mp4'

type Props = {
  index: number
  title: string
  bullets: string[]
  images: string[]
  repoHref?: string
}

export function FeaturesProjectCard({ index, title, bullets, images, repoHref }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <motion.div
      ref={ref}
      className="rounded-[2rem] overflow-hidden relative flex flex-col h-full bg-[#101010]/80 backdrop-blur-md"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <video className="absolute inset-0 w-full h-full object-cover blur-xl scale-110" src={bgHero} autoPlay loop muted playsInline />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex-1 min-h-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} - ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 ${i === currentImage ? 'opacity-80' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col p-5 sm:p-6 gap-3 h-48">
        <h3 className="text-[#A7B4BC] font-medium text-xl sm:text-2xl m-0">{title}</h3>
        <p className="text-[#A7B4BC]/70 text-sm leading-relaxed m-0 flex-1">{bullets[0]}</p>
        <div className="flex justify-end">
          <PillButton label="Ver Repositorio" href={repoHref ?? '#'} external={!!repoHref} />
        </div>
      </div>
    </motion.div>
  )
}
