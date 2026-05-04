import { WordsPullUp } from '../animations/WordsPullUp'

type Props = {
  text: string
  align?: 'left' | 'center' | 'right'
  color?: string
  leading?: 'tight' | 'snug'
}

export function SectionTitle({ text, align = 'center', color = '#A7B4BC', leading = 'tight' }: Props) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
  const leadingClass = leading === 'snug' ? 'leading-[1.1]' : 'leading-[0.9]'
  return (
    <div className={alignClass}>
      <h2
        style={{ fontSize: 'clamp(40px,6vw,80px)', color }}
        className={`font-medium ${leadingClass} tracking-[-0.07em] m-0 pb-1`}
      >
        <WordsPullUp text={text} />
      </h2>
    </div>
  )
}
