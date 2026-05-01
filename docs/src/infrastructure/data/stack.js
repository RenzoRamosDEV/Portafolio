import { getPublicPath } from '../paths.js';

/**
 * Catálogo del stack técnico personal.
 *
 * Cada item se agrupa por `cat` para que la UI pueda renderizar columnas
 * separadas (Backend / Frontend / IA / Tools / IDEs & SO) sin necesidad
 * de mapear categorías a un orden externo.
 *
 * @type {import('../../domain/types.js').StackItem[]}
 */
export const STACK = [
  { cat: 'back', name: 'Kotlin',           icon: getPublicPath('/icons/KOTLIN.png'),                  desc: 'Desarrollo backend y mobile con enfoque en arquitectura limpia, servicios escalables.' },
  { cat: 'back', name: 'Java',             icon: getPublicPath('/icons/JAVA.png'),                    desc: 'Desarrollo backend con Java, arquitectura limpia y servicios escalables.' },
  { cat: 'back', name: 'Spring Boot',      icon: getPublicPath('/icons/SPRING.png'),                  desc: 'Desarrollo de APIs REST con Spring Boot y arquitectura escalable.' },
  { cat: 'back', name: 'Spring Modulith',  icon: getPublicPath('/icons/SPRINGMODULITH-LOGO.png'),     desc: 'Extensión de Spring Boot para estructurar monolitos mediante módulos desacoplados con límites estrictos y validación automática' },
  { cat: 'back', name: 'MySQL',            icon: getPublicPath('/icons/MYSQL.png'),                   desc: 'Bases de datos relacionales, queries complejas y optimización.' },
  { cat: 'back', name: 'Docker',           icon: getPublicPath('/icons/DOCKER.png'),                  desc: 'Contenedores para entornos reproducibles y deploys limpios.' },

  { cat: 'front', name: 'HTML',            icon: getPublicPath('/icons/HTML.png'),                    desc: 'Maquetación web con HTML semántico y accesible.' },
  { cat: 'front', name: 'CSS',             icon: getPublicPath('/icons/CSS.png'),                     desc: 'Diseño responsivo, animaciones y estilos modernos.' },
  { cat: 'front', name: 'JavaScript',      icon: getPublicPath('/icons/JAVASCRIPT-LOGO.png'),         desc: 'Lenguaje de programación para interactividad y lógica en el navegador.' },
  { cat: 'front', name: 'React',           icon: getPublicPath('/icons/REACT-LOGO.png'),              desc: 'Librería para construir interfaces de usuario con componentes reutilizables.' },

  { cat: 'ia', name: 'Copilot CLI',        icon: getPublicPath('/icons/GITHUB-COPILOT-CLI-LOGO.png'), desc: 'Asistente de IA de GitHub para sugerencias de código en tiempo real.' },
  { cat: 'ia', name: 'Claude Code',        icon: getPublicPath('/icons/CLAUDE.png'),                  desc: 'Agente IA para desarrollo y optimización de código.' },
  { cat: 'ia', name: 'Claude Design',      icon: getPublicPath('/icons/CLAUDEDISEÑO-LOGO.png'),       desc: 'Agente IA para diseño y maquetación de interfaces.' },
  { cat: 'ia', name: 'OpenCode',           icon: getPublicPath('/icons/OPENCODE.png'),                desc: 'Agente IA para acelerar desarrollo y debugging.' },
  { cat: 'ia', name: 'OpenSpec',           icon: getPublicPath('/icons/OPENSPEC.png'),                desc: 'Agente IA para especificación y diseño de software.' },

  { cat: 'stack-tools', name: 'JUnit',     icon: getPublicPath('/icons/JUNIT.png'),                   desc: 'Pruebas unitarias y de integración con JUnit.' },
  { cat: 'stack-tools', name: 'Maven',     icon: getPublicPath('/icons/MAVEN.png'),                   desc: 'Gestión de dependencias y construcción de proyectos con Maven.' },
  { cat: 'stack-tools', name: 'Gradle',    icon: getPublicPath('/icons/GRADLE.png'),                  desc: 'Gestión de dependencias y construcción de proyectos con Gradle.' },
  { cat: 'stack-tools', name: 'Git',       icon: getPublicPath('/icons/GIT.png'),                     desc: 'Control de versiones y flujo de trabajo colaborativo.' },

  { cat: 'ides-so', name: 'Antigravity',   icon: getPublicPath('/icons/ANTIGRAVITY.png'),             desc: 'IDE para desarrollo Frontend potenciado con IA.' },
  { cat: 'ides-so', name: 'IntelliJ',      icon: getPublicPath('/icons/INTELLIJ.png'),                desc: 'IDE para desarrollo Backend con máxima productividad.' },
  { cat: 'ides-so', name: 'Linux',         icon: getPublicPath('/icons/LINUX.png'),                   desc: 'Sistema operativo entorno Linux Ubuntu.' },
  { cat: 'ides-so', name: 'Windows',       icon: getPublicPath('/icons/WINDOWS.png'),                 desc: 'Sistema operativo entorno Windows.' },
];
