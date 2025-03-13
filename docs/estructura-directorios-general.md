# 📌 Estructura General del Proyecto

## **📂 Organización de Directorios**
```
angular-access-module/
│── src/
│   ├── app/
│   │   ├── core/               → 📌 Módulo central con configuraciones globales
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── core.module.ts
│   │   ├── shared/             → 📌 Módulo de elementos reutilizables
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   ├── shared.module.ts
│   │   ├── modules/             → 📌 Módulos funcionales
│   │   │   ├── access/         → 📌 Módulo de autenticación y acceso
│   │   │   ├── otros-modulos/   → 📌 Espacio para futuras implementaciones
│   │   ├── pages/              → 📌 Páginas principales del sistema
│   │   │   ├── welcome/
│   │   │   │   ├── welcome.component.ts
│   │   │   ├── pages.module.ts
│   │   ├── app.component.ts     → Componente raíz
│   │   ├── app-routing.module.ts → Enrutamiento principal
│   │   ├── app.module.ts        → Módulo principal
```

## **📌 Descripción de los Módulos**

### **1️⃣ `core/` (Configuraciones Globales)**
✅ **Propósito:** Contiene lógica compartida y configuraciones globales.
- **Servicios globales (`services/`)**: Manejo de autenticación, configuración, API.
- **Guards (`guards/`)**: Protección de rutas.
- **Componentes (`components/`)**: Elementos como headers globales.

### **2️⃣ `shared/` (Componentes Reutilizables)**
✅ **Propósito:** Contiene elementos reutilizables.
- **Componentes (`components/`)**: Botones, inputs, modales reutilizables.
- **Directivas (`directives/`)**: Mejoras visuales o funcionales.
- **Pipes (`pipes/`)**: Transformaciones de datos.

### **3️⃣ `modules/` (Módulos Funcionales)**
✅ **Propósito:** Contiene módulos independientes que pueden ser añadidos o eliminados sin afectar la estructura principal.
- **`access/`** → Módulo de autenticación y acceso.
- **Espacio para módulos futuros.**

### **4️⃣ `pages/` (Páginas principales)**
✅ **Propósito:** Contiene las páginas principales del sistema.
- **`WelcomeComponent`** → Página de bienvenida.

---
📌 **Esta estructura está diseñada para ser modular y escalable, facilitando la reutilización del código en futuros proyectos.** 🚀