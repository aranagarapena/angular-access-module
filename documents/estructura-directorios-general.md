# 📌 Estructura General del Proyecto

## **📂 Organización de Directorios**

```
angular-access-module/
│── src/
│   ├── app/
│   │   ├── core/               → 📌 Configuraciones globales y servicios
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   ├── shared/             → 📌 Elementos reutilizables
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   ├── modules/             → 📌 Módulos funcionales
│   │   │   ├── access/         → 📌 Módulo de autenticación y acceso
│   │   ├── pages/              → 📌 Páginas principales del sistema
│   │   │   ├── welcome/
│   │   │   │   ├── welcome.component.ts
│   │   ├── app.component.ts     → Componente raíz
│   │   ├── app.config.ts        → Configuración de la aplicación standalone
│   │   ├── main.ts              → Punto de entrada de la aplicación
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

📌 **Esta estructura está optimizada para proyectos Standalone en Angular, eliminando la dependencia de `NgModules` y facilitando la escalabilidad.** 🚀
