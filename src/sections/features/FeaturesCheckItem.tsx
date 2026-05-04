import { Check } from 'lucide-react'

export function FeaturesCheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
      <span className="text-[#A7B4BC] text-xs sm:text-sm">{text}</span>
    </li>
  )
}
