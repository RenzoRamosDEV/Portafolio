type Item = {
  title: string
  company: string
  period: string
  desc: string
  preview?: string
}

type Props = {
  item: Item
  onPreviewClick?: (preview: string, title: string) => void
  size?: 'sm' | 'md'
  showPreview?: boolean
  className?: string
}

export function ExperienceItemBlock({ item, onPreviewClick, size = 'md', showPreview = false, className = '' }: Props) {
  const titleSize = size === 'sm' ? 'text-base' : 'text-lg'
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className={`text-[#A7B4BC] font-semibold ${titleSize} leading-snug flex-shrink-0`}>{item.title}</span>
      <div className="flex items-center justify-between gap-2 flex-shrink-0">
        <span className="text-[#A7B4BC]/60 text-sm">{item.company}</span>
        <span className="text-[#A7B4BC]/40 text-sm font-mono whitespace-nowrap">{item.period}</span>
      </div>
      <div className="flex flex-col gap-0.5 flex-shrink-0">
        {item.desc.split('\n').filter(Boolean).map((line, i) => (
          <p key={i} className={`text-[#A7B4BC]/60 text-sm leading-relaxed m-0 ${line.startsWith('-') ? 'pl-2' : ''}`}>{line}</p>
        ))}
      </div>
      {showPreview && item.preview !== undefined && (
        <div className="mt-2 flex justify-center flex-1 min-h-0">
          <div
            className="w-64 h-48 rounded-xl overflow-hidden border border-white/10 relative flex-shrink-0 cursor-pointer"
            onClick={() => item.preview && onPreviewClick?.(item.preview, item.title)}
          >
            {item.preview
              ? <img src={item.preview} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center" />
              : <span className="text-[#A7B4BC]/30 text-xs text-center p-4">Preview no disponible</span>
            }
          </div>
        </div>
      )}
    </div>
  )
}
