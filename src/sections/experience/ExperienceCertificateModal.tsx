import { Modal } from '../../components/ui/Modal'

type Props = { src: string; title: string; onClose: () => void }

export function ExperienceCertificateModal({ src, title, onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <img src={src} alt={title} className="w-full h-auto rounded-2xl shadow-2xl" />
    </Modal>
  )
}
