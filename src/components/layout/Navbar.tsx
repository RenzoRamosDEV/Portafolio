import { useEffect, useState } from 'react'
import { useScrollFusion } from '../../hooks/useScrollFusion'
import { useLanguage } from '../../i18n/LanguageContext'

const NAV_SECTION_IDS = ['sobre-mi', 'proyectos', 'experiencia', 'stack', 'metodologias']
const FUSED_SECTIONS = ['proyectos', 'experiencia', 'experiencia-formacion', 'stack', 'metodologias']

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault()
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [ids])

  return active
}

export function Navbar() {
  const { scrolled, fused } = useScrollFusion(FUSED_SECTIONS)
  const activeSection = useActiveSection(NAV_SECTION_IDS)
  const isFloating = scrolled && !fused
  const borderColor = isFloating ? 'rgba(255,255,255,0.1)' : 'transparent'
  const { t, lang, setLang } = useLanguage()

  const navItems = [
    { label: t('nav_about'),         targetId: 'sobre-mi'     },
    { label: t('nav_projects'),      targetId: 'proyectos'    },
    { label: t('nav_experience'),    targetId: 'experiencia'  },
    { label: t('nav_stack'),         targetId: 'stack'        },
    { label: t('nav_methodologies'), targetId: 'metodologias' },
  ]

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <nav
        style={{ backgroundColor: '#000000', borderColor }}
        className={`transition-all duration-300 shadow-lg border ${!scrolled
            ? 'rounded-b-xl md:rounded-b-2xl px-3 py-2 md:px-10 md:py-2.5 lg:px-14 lg:py-3'
            : 'rounded-full px-6 py-2 mt-4 backdrop-blur-md'
          }`}
      >
        <ul className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 list-none m-0 p-0 flex-nowrap">
          {navItems.map(({ label, targetId }) => (
            <li key={targetId}>
              <a
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
                className="nav-link text-[13px] sm:text-sm md:text-sm lg:text-base font-medium no-underline whitespace-nowrap transition-colors duration-300"
                style={{ color: activeSection === targetId ? '#ffffff' : undefined }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="nav-link text-[13px] sm:text-sm md:text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-300 bg-transparent border-0 cursor-pointer px-0"
              style={{ color: 'rgba(167,180,188,0.6)' }}
            >
              {t('lang_toggle')}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
