# 📌 Estructura del Módulo de Acceso (`access-module`)

## **📂 Organización de Directorios**
```
modules/
└── access/
    ├── components/                → 📌 Componentes visuales
    │   ├── access-modal/          → 📌 Ventana modal con login/registro
    │   │   ├── access-modal.component.ts
    │   │   ├── access-modal.component.html
    │   │   ├── access-modal.component.scss
    │   ├── login-form/            → 📌 Formulario de inicio de sesión
    │   │   ├── login-form.component.ts
    │   │   ├── login-form.component.html
    │   │   ├── login-form.component.scss
    │   ├── register-form/         → 📌 Formulario de registro
    │   │   ├── register-form.component.ts
    │   │   ├── register-form.component.html
    │   │   ├── register-form.component.scss
    ├── services/                  → 📌 Servicios de autenticación
    │   ├── access.service.ts       → 📌 Lógica de autenticación (login/logout)
    ├── guards/                     → 📌 Protección de rutas privadas
    │   ├── access.guard.ts
```

## **📌 Descripción de los Componentes**

### **1️⃣ `AccessModalComponent` (Ventana Modal de Autenticación)**
✅ **Propósito:** Contiene la UI del modal con las pestañas de **Inicio de Sesión** y **Registro**.  
✅ **Elementos:**
- Pestañas para cambiar entre login y registro.
- Botón de cierre (`✖`).
- Muestra `LoginFormComponent` o `RegisterFormComponent` según la selección del usuario.

### **2️⃣ `LoginFormComponent` (Formulario de Inicio de Sesión)**
✅ **Propósito:** Formulario para que los usuarios ingresen con su cuenta.  
✅ **Campos:**
- **Nombre de usuario o correo electrónico**.
- **Contraseña**.
- **Botón "Iniciar Sesión"**.

### **3️⃣ `RegisterFormComponent` (Formulario de Registro)**
✅ **Propósito:** Permite a los usuarios registrarse en la aplicación.  
✅ **Campos obligatorios:**
- Nombre, Primer Apellido, Segundo Apellido, DNI, Teléfono, Correo Electrónico, Contraseña, Repetir Contraseña.
✅ **Campos opcionales:**
- Ciudad de Residencia, Código Postal, Dirección, Fecha de Nacimiento, Género (Lista desplegable), Sector o Industria (Lista desplegable).
✅ **Extras:**
- Checkbox "Aceptar Términos y Condiciones".
- Botón "Registrarse".
- Botón "Seguir como invitado".

### **4️⃣ `access.service.ts` (Manejo de Autenticación)**
✅ **Propósito:** Contiene las funciones de **login**, **registro**, **logout** y gestión del usuario autenticado.  
✅ **Funciones:**
- `login(credentials)` → Inicia sesión con usuario y contraseña.
- `register(userData)` → Registra un nuevo usuario.
- `logout()` → Cierra sesión.

### **5️⃣ `access.guard.ts` (Protección de Rutas Privadas)**
✅ **Propósito:** Restringe el acceso a ciertas rutas si el usuario no está autenticado.

---
📌 **Esta estructura está adaptada a un proyecto Standalone en Angular, eliminando la necesidad de `NgModules` y facilitando la reutilización.** 🚀

