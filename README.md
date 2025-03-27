# 🔐 Angular Access Module

[![Deploy](https://img.shields.io/badge/demo-live-blue.svg)](https://aranagarapena.github.io/angular-access-module/)

**Angular Access Module** es un módulo reutilizable de autenticación y acceso para aplicaciones Angular. Su propósito es proporcionar una base sólida, escalable y moderna para gestionar el inicio de sesión, registro de usuarios y control de acceso en aplicaciones web desarrolladas con Angular.

---

## 🌐 Demo en vivo

👉 Puedes ver el módulo funcionando aquí:  [🔗](https://aranagarapena.github.io/angular-access-module/)

---

## 📦 Características

- ✅ Arquitectura Standalone Angular 19+
- ✅ Interfaz moderna
- ✅ Modal de autenticación con fondo opaco
- ✅ Formularios de:
  - Inicio de sesión
  - Registro con campos obligatorios y opcionales
- ✅ Componentes desacoplados y reutilizables
- ✅ Barra de navegación configurable
- ✅ Preparado para integración futura con APIs backend

---

## 🗂️ Estructura del Proyecto

```bash
angular-access-module/
├── development/
│   └── frontend/
│       └── src/
│           └── app/
│               ├── core/
│               │   └── components/
│               │       └── navbar/                 # Barra de navegación
│               ├── modules/
│               │   └── access/                     # Módulo de autenticación
│               │       ├── components/
│               │       │   ├── access-modal/       # Modal de login/registro
│               │       │   ├── login-form/         # Formulario de inicio de sesión
│               │       │   └── register-form/      # Formulario de registro
│               │       ├── guards/                 # Protección de rutas
│               │       └── services/               # Servicios de acceso/autenticación
│               ├── pages/
│               │   └── welcome/                    # Página de bienvenida
│               ├── shared/                         # Elementos reutilizables (pipes, directivas...)
│               ├── app.component.ts
│               ├── app.config.ts
│               ├── app.routes.ts
│               └── ...
│           └── styles.scss                         # Estilos globales
├── docs/
├── documents/               # Documentación general del proyecto (especificaciones, notas técnicas, etc.)
├── test/                    # Scripts o pruebas externas no Angular (opcional)                                           # Build de producción para GitHub Pages
└── README.md
```

## 📁 Descripción de Directorios del proyecto

- **`development/`**  
  Contiene todo el código fuente de desarrollo.

- **`frontend/`**  
  Proyecto Angular con arquitectura standalone.

- **`core/`**  
  Componentes centrales de la aplicación, como la barra de navegación (`navbar`).

- **`modules/access/`**  
  Módulo de acceso que incluye:
  - `access-modal/`: ventana modal de autenticación
  - `login-form/`: formulario de inicio de sesión
  - `register-form/`: formulario de registro
  - `guards/`: protección de rutas
  - `services/`: servicios relacionados con el acceso/autenticación

- **`pages/welcome/`**  
  Página de bienvenida de la aplicación.

- **`shared/`**  
  Elementos reutilizables como pipes, directivas o componentes comunes.

- **`styles.scss`**  
  Estilos globales de la aplicación.

- **`docs/`**  
  Carpeta donde se genera el build de producción para GitHub Pages (`ng build --configuration=production`).

- **`documents/`**  
  Documentación técnica y funcional del proyecto (especificaciones, notas, ideas, etc.).

- **`test/`**  
  Scripts o pruebas adicionales no integradas directamente en el proyecto Angular.

- **`README.md`**  
  Documentación principal del proyecto.
