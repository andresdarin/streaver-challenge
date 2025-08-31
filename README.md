# Streaver Challenge

Aplicación desarrollada para el challenge de Streaver.

**Stack:** Next.js + TypeScript + TailwindCSS + SWR

---

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Iniciar la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```
4. Abrir en el navegador:

   ```
   http://localhost:3000
   ```

---

## Funcionalidad

* Listado de posts obtenidos desde la API pública: `https://jsonplaceholder.typicode.com/posts`.
* Filtrado de posts por `userId` mediante un input con **debouncing**.
* Reconexión automática ante errores de red o pérdida de conexión gracias a **SWR**.
* Mensajes para conexiones lentas o errores en la carga de datos.

---

## Deploy

* Deploy automático en **Vercel** configurado desde la rama `master`.

---

## Assumptions

Ver el archivo [`assumptions.md`](./assumptions.md) para detalles sobre las decisiones y suposiciones realizadas durante el desarrollo.

---

## Notas

* Esta es una aplicación de demostración enfocada en funcionalidad mínima y buena experiencia de usuario.

