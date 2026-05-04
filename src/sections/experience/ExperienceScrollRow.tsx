import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ExperienceItemBlock } from './ExperienceItemBlock'
import { ExperienceCertificateModal } from './ExperienceCertificateModal'

type Item = {
  title: string
  company: string
  period: string
  desc: string
  preview?: string
}

type Props = {
  type: string
  items: Item[]
}

export function ExperienceScrollRow({ type, items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isCerts = type === 'Certificados'
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(items.length > (isCerts ? 3 : 2))
  const [modalSrc, setModalSrc] = useState<{ src: string; title: string } | null>(null)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 1)
  }

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const firstItem = el.children[0] as HTMLElement
    if (!firstItem) return
    const itemWidth = firstItem.offsetWidth + 16
    el.scrollBy({ left: dir === 'right' ? itemWidth : -itemWidth, behavior: 'smooth' })
  }

  const hasMore = isCerts ? items.length > 3 : items.length > 2
  const itemWidthClass = isCerts ? 'w-[calc(33.33%-11px)] min-w-[calc(33.33%-11px)]' : 'w-[calc(50%-8px)] min-w-[calc(50%-8px)]'

  return (
    <div className="bg-[#101010]/80 backdrop-blur-md rounded-3xl p-4 border border-white/5 shadow-xl flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-[#A7B4BC]/40 text-xs tracking-widest uppercase font-bold">{type}</span>
        {hasMore && (
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className={`flex items-center justify-center w-8 h-8 backdrop-blur-md rounded-full shadow transition-all duration-300 border-0 cursor-pointer ${canLeft ? 'bg-white/20 hover:bg-white/40' : 'bg-white/5 cursor-not-allowed'}`}
            >
              <ArrowLeft className={`w-4 h-4 ${canLeft ? 'text-[#A7B4BC]' : 'text-[#A7B4BC]/20'}`} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`flex items-center justify-center w-8 h-8 backdrop-blur-md rounded-full shadow transition-all duration-300 border-0 cursor-pointer ${canRight ? 'bg-white/20 hover:bg-white/40' : 'bg-white/5 cursor-not-allowed'}`}
            >
              <ArrowRight className={`w-4 h-4 ${canRight ? 'text-[#A7B4BC]' : 'text-[#A7B4BC]/20'}`} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
      <div ref={scrollRef} onScroll={updateArrows} className="flex flex-row gap-4 overflow-x-hidden flex-1 min-h-0">
        {items.map((item) => (
          <ExperienceItemBlock
            key={item.title}
            item={item}
            showPreview
            onPreviewClick={(src, title) => setModalSrc({ src, title })}
            className={`${itemWidthClass} flex-shrink-0 overflow-hidden border-l border-white/10 pl-4 min-h-0`}
          />
        ))}
      </div>
      {modalSrc && <ExperienceCertificateModal src={modalSrc.src} title={modalSrc.title} onClose={() => setModalSrc(null)} />}
    </div>
  )
}
