import claude from '../assets/icons-stack/claude.png'
import claudeDesign from '../assets/icons-stack/claude-design.png'
import css from '../assets/icons-stack/css.png'
import docker from '../assets/icons-stack/docker.png'
import git from '../assets/icons-stack/git.png'
import githubCopilot from '../assets/icons-stack/github-copilot.png'
import gradle from '../assets/icons-stack/gradle.png'
import html from '../assets/icons-stack/html.png'
import java from '../assets/icons-stack/java.png'
import javascript from '../assets/icons-stack/javascript.png'
import junit from '../assets/icons-stack/junit.png'
import kotlin from '../assets/icons-stack/kotlin.png'
import maven from '../assets/icons-stack/maven.png'
import mysql from '../assets/icons-stack/mysql.png'
import opencode from '../assets/icons-stack/opencode.png'
import openspec from '../assets/icons-stack/openspec.png'
import react from '../assets/icons-stack/react.png'
import spring from '../assets/icons-stack/spring.png'
import springModulith from '../assets/icons-stack/spring-modulith.png'

export type StackItem = {
  kind: 'stack'
  cat: 'back' | 'front' | 'ia' | 'stack-tools'
  name: string
  icon: string
  desc: string
}

export const STACK: StackItem[] = [
  { kind: 'stack', cat: 'back', name: 'Kotlin', icon: kotlin, desc: 'Desarrollo backend y mobile con enfoque en arquitectura limpia, servicios escalables.' },
  { kind: 'stack', cat: 'back', name: 'Java', icon: java, desc: 'Desarrollo backend con Java, arquitectura limpia y servicios escalables.' },
  { kind: 'stack', cat: 'back', name: 'Spring Boot', icon: spring, desc: 'Desarrollo de APIs REST con Spring Boot y arquitectura escalable.' },
  { kind: 'stack', cat: 'back', name: 'Spring Modulith', icon: springModulith, desc: 'Extensión de Spring Boot para estructurar monolitos mediante módulos desacoplados con límites estrictos y validación automática' },
  { kind: 'stack', cat: 'back', name: 'MySQL', icon: mysql, desc: 'Bases de datos relacionales, queries complejas y optimización.' },
  { kind: 'stack', cat: 'back', name: 'Docker', icon: docker, desc: 'Contenedores para entornos reproducibles y deploys limpios.' },

  { kind: 'stack', cat: 'front', name: 'HTML', icon: html, desc: 'Maquetación web con HTML semántico y accesible.' },
  { kind: 'stack', cat: 'front', name: 'CSS', icon: css, desc: 'Diseño responsivo, animaciones y estilos modernos.' },
  { kind: 'stack', cat: 'front', name: 'JavaScript', icon: javascript, desc: 'Lenguaje de programación para interactividad y lógica en el navegador.' },
  { kind: 'stack', cat: 'front', name: 'React', icon: react, desc: 'Librería para construir interfaces de usuario con componentes reutilizables.' },

  { kind: 'stack', cat: 'ia', name: 'Copilot CLI', icon: githubCopilot, desc: 'Asistente de IA de GitHub para sugerencias de código en tiempo real.' },
  { kind: 'stack', cat: 'ia', name: 'Claude Code', icon: claude, desc: 'Agente IA para desarrollo y optimización de código.' },
  { kind: 'stack', cat: 'ia', name: 'Claude Design', icon: claudeDesign, desc: 'Agente IA para diseño y maquetación de interfaces.' },
  { kind: 'stack', cat: 'ia', name: 'OpenCode', icon: opencode, desc: 'Agente IA para acelerar desarrollo y debugging.' },
  { kind: 'stack', cat: 'ia', name: 'OpenSpec', icon: openspec, desc: 'Agente IA para especificación y diseño de software.' },

  { kind: 'stack', cat: 'stack-tools', name: 'JUnit', icon: junit, desc: 'Pruebas unitarias y de integración con JUnit.' },
  { kind: 'stack', cat: 'stack-tools', name: 'Maven', icon: maven, desc: 'Gestión de dependencias y construcción de proyectos con Maven.' },
  { kind: 'stack', cat: 'stack-tools', name: 'Gradle', icon: gradle, desc: 'Gestión de dependencias y construcción de proyectos con Gradle.' },
  { kind: 'stack', cat: 'stack-tools', name: 'Git', icon: git, desc: 'Control de versiones y flujo de trabajo colaborativo.' },
]
