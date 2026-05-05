import booqui01 from '../assets/projects/booqui/booqui-01.png'
import booqui02 from '../assets/projects/booqui/booqui-02.png'
import booqui03 from '../assets/projects/booqui/booqui-03.png'
import booqui04 from '../assets/projects/booqui/booqui-04.png'
import booqui05 from '../assets/projects/booqui/booqui-05.png'
import booqui06 from '../assets/projects/booqui/booqui-06.png'
import inventario01 from '../assets/projects/inventario/inventario-01.png'
import inventario02 from '../assets/projects/inventario/inventario-02.png'
import inventario03 from '../assets/projects/inventario/inventario-03.png'

export type Project = {
  num: string
  title: string
  images: string[]
  desc: string
  points: { title: string; body: string }[]
  badges: string[]
  demo: string
  repo: string
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'Booqi - Sistema de Gestión de Reservas de Eventos',
    images: [booqui01, booqui02, booqui03, booqui04, booqui05, booqui06],
    desc: 'Booqi es una plataforma completa para la gestión de eventos y reservas que facilita la compra de entradas para diversos tipos de eventos. El sistema está diseñado con una arquitectura de microservicios independientes que se comunican entre sí, garantizando escalabilidad, mantenibilidad y alta disponibilidad.',
    points: [
      { title: 'Compra centralizada de entradas', body: 'Elimina la necesidad de ir físicamente a taquillas. Todo el catálogo de eventos está en una sola plataforma donde el usuario puede explorar, filtrar y comprar desde cualquier lugar.' },
      { title: 'Gestión del proceso de reserva de principio a fin', body: 'Selección de evento, carrito, pago y confirmación ocurren dentro del mismo sistema sin redirigir al usuario a servicios externos desconectados.' },
      { title: 'Entrega inmediata y digital de tickets', body: 'El sistema genera automáticamente un ticket en PDF con los datos de la reserva, listo para descargar al instante.' },
      { title: 'Control de disponibilidad en tiempo real', body: 'Valida la disponibilidad antes de confirmar cada reserva, garantizando que no se vendan más entradas de las que el evento soporta.' },
      { title: 'Panel de administración para organizadores', body: 'Los organizadores pueden crear, gestionar y monitorear sus eventos con visibilidad de reservas, pagos y estadísticas desde un panel dedicado.' },
    ],
    badges: ['Java', 'Spring Boot', 'SpringDoc', 'Maven', 'MySQL', 'React', 'Boostrap', 'TypeScript', 'Docker', 'Otros...'],
    demo: '#',
    repo: 'https://github.com/RenzoRamosDEV/Booqui'
  },
  {
    num: '02',
    title: 'Sistema de Gestión de Inventario de Productos',
    images: [inventario01, inventario02, inventario03],
    desc: 'Este proyecto es una aplicacion web que permite gestionar inventarios de prodcutos, que facilita el control de stock, la visualizacion de productos. El sistema esta diseñado como monolito tradicional, es decir, que se puede dividir en modulos independientes',
    points: [
      { title: 'Gestión centralizada del inventario', body: 'Elimina el uso de hojas de cálculo o sistemas dispersos. Todos los productos están en una sola plataforma accesible desde cualquier dispositivo.' },
      { title: 'Control total del ciclo de vida de un producto', body: 'Crear, editar, eliminar y restaurar productos ocurren dentro del mismo sistema, con eliminación lógica que permite recuperar registros sin pérdida permanente.' },
      { title: 'Gestión de stock en tiempo real', body: 'El usuario puede aumentar o reducir el stock de cualquier producto de forma inmediata desde la misma tabla, sin entrar a formularios separados.' },
      { title: 'Visibilidad instantánea del estado del inventario', body: 'El dashboard muestra en tiempo real el valor total del stock, productos con stock bajo, agotados y los más costosos, todo en un solo vistazo.' },
      { title: 'Filtrado y búsqueda para cualquier escala', body: 'Filtra por nombre, estado de stock y productos activos o eliminados, con paginación automática que mantiene la interfaz ágil sin importar la cantidad de registros.' },
    ],
    badges: ['Java', 'Spring Boot', 'SpringDoc', 'Maven', 'MySQL', 'React', 'TypeScript', 'TailwindCSS', 'Claude Design', 'Otros...'],
    demo: '#',
    repo: 'https://github.com/RenzoRamosDEV/Gestion-De-Inventario'
  }
]