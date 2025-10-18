Portafolio Personal - Nicolás Fonseca (Excintium)
Este repositorio contiene el código fuente de mi portafolio personal, construido como una aplicación web moderna. El objetivo es mostrar mis proyectos, experiencia profesional y formación académica de una manera limpia, interactiva y totalmente responsiva.

El proyecto está desarrollado con un stack moderno enfocado en React, utilizando renderizado del lado del servidor (SSR) gestionado por React Router.

Tecnologías Utilizadas
Este portafolio está construido con:

Framework: React 19

Enrutamiento y SSR: React Router (con @react-router/dev)

Bundler y Servidor Dev: Vite

Lenguaje: TypeScript

UI / Componentes: Ant Design (antd)

Testing: Vitest y React Testing Library

Características Principales
Renderizado del Lado del Servidor (SSR): Mejor performance inicial y SEO, gestionado por la configuración de React Router.

Tema Claro y Oscuro: Selector de tema (Light/Dark mode) con persistencia de estado, usando useState en el Layout y variables CSS.

Diseño Responsivo: Adaptable a dispositivos móviles, utilizando el hook Grid.useBreakpoint de Ant Design para un menú de navegación tipo "Drawer".

Arquitectura de Componentes: Estructura limpia basada en Atomic Design (atoms, molecules, organisms).

Alta Cobertura de Tests: Tests unitarios y de integración para todos los componentes, asegurando la robustez de la UI.

Comandos del Proyecto
Los scripts principales están definidos en package.json.

Instalación
Instala las dependencias del proyecto:

Bash

npm install
Desarrollo
Inicia el servidor de desarrollo (con HMR y SSR) usando el CLI de React Router:

Bash

npm run dev
La aplicación estará disponible en http://localhost:5173.

Testing
Ejecuta la suite de tests unitarios con Vitest:

Bash

npm run test
Build de Producción
Crea la build optimizada para producción:

Bash

npm run build
Esto generará los assets en la carpeta build/ (divididos en client/ y server/).

Este proyecto fue desarrollado por Nicolás Fonseca.