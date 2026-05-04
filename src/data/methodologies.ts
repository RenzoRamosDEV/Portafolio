export type MethodologyItem = {
  kind: 'methodology'
  cat: 'arch' | 'testing' | 'process' | 'ui'
  name: string
  label: string
  desc: string
}

export const METHODOLOGIES: MethodologyItem[] = [
  { kind: 'methodology', cat: 'arch', name: 'SOLID Principles', label: 'SLD', desc: 'Responsabilidad única, abierto/cerrado, sustitución de Liskov, interfaz de segregación, inversión de dependencias.' },
  { kind: 'methodology', cat: 'arch', name: 'Clean Architecture', label: 'CA', desc: 'Estructura por capas que mantiene el dominio independiente de frameworks y detalles externos.' },
  { kind: 'methodology', cat: 'testing', name: 'Mockito', label: 'M', desc: 'Creación de dobles de prueba (mocks y spies) para aislar unidades de código.' },
  { kind: 'methodology', cat: 'testing', name: 'Test-Driven Development', label: 'TDD', desc: 'Metodología donde las pruebas guían el diseño y la implementación de la lógica.' },
  { kind: 'methodology', cat: 'testing', name: 'Integration Testing', label: 'IT', desc: 'Validación del flujo completo entre módulos y servicios en entornos reales.' },
  { kind: 'methodology', cat: 'testing', name: 'Testcontainers', label: 'TC', desc: 'Testing con contenedores efímeros para dependencias reales como bases de datos.' },
  { kind: 'methodology', cat: 'process', name: 'Git Flow / Trunk-Based', label: 'GIT', desc: 'Estrategias de ramificación para gestión de versiones y despliegue continuo.' },
  { kind: 'methodology', cat: 'process', name: 'Agile (Scrum/Kanban)', label: 'AG', desc: 'Gestión de proyectos basada en entregas iterativas y mejora continua.' },
  { kind: 'methodology', cat: 'process', name: 'Spec-Driven Development', label: 'SDD', desc: 'Desarrollo basado en especificaciones técnicas previas a la implementación.' },
  { kind: 'methodology', cat: 'process', name: 'Prompt Engineering', label: 'PE', desc: 'Diseño de instrucciones optimizadas para maximizar la precisión de modelos de lenguaje.' },
  { kind: 'methodology', cat: 'process', name: 'Agentic Workflows', label: 'AW', desc: 'Uso de agentes autónomos para ejecución, debugging y refactorización proactiva de código.' },
  { kind: 'methodology', cat: 'ui', name: 'Component-Based UI', label: 'CUI', desc: 'Construcción de interfaces mediante componentes reutilizables y desacoplados.' },
  { kind: 'methodology', cat: 'ui', name: 'Responsive Design', label: 'RUI', desc: 'Creación de experiencias visuales adaptables a cualquier dispositivo o resolución.' },
  { kind: 'methodology', cat: 'ui', name: 'AI-Assisted', label: 'AA', desc: 'Integración de copilotos inteligentes para soporte en tiempo real y completado de código.' },
]
