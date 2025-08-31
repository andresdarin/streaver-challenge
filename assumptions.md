# Assumptions

Este documento detalla las suposiciones realizadas antes y durante el desarrollo de la aplicación para el challenge.

## Tecnologías
- Proyecto desarrollado con **Next.js** y **TypeScript** para frontend y backend.
- **TailwindCSS** se utiliza para la UI por rapidez y consistencia visual.

## Datos y API
- Los posts provienen de la API pública: https://jsonplaceholder.typicode.com/posts.
- Se asume que cada post contiene los campos: `id`, `userId`, `title` y `body`.
- El filtrado solo se realiza por `userId` y no por otros campos.

## Funcionalidad
- Funcionalidad mínima priorizada:
  - Listado de posts.
  - Filtrado por `userId`.
- Se implementa **SWR** para:
  - Reconexión automática ante fallos de red.
  - Reintento automático de solicitudes después de errores.
- Se utiliza **debouncing** en el input de búsqueda para reducir llamadas innecesarias a la API.
- Se muestran mensajes opcionales de alerta si la conexión es lenta o hay errores de carga.

## Infraestructura
- Deploy automático configurado en **Vercel** desde la rama `master`.
- Se asume que los usuarios accederán desde navegadores modernos compatibles con React y SWR.
