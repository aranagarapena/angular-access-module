# 📌 Especificaciones del Módulo de Acceso

## **1️⃣ Estructura General de la Interfaz**

### **🔹 Barra de Navegación (Siempre Visible)**

✅ **Izquierda:**

- Botón de menú (tres rayas) para futuras funcionalidades.

✅ **Centro:**

- Vacío (para futuras funcionalidades).

✅ **Derecha:**

- Selector de idioma.
- Botón redondo de acceso → Para abrir la ventana modal de inicio de sesión/registro.

---

## **2️⃣ Sistema de Inicio de Sesión / Registro (Inspirado en Coinbase)**

Cuando se haga clic en el botón de acceso:
✅ Se oscurece todo el fondo de la aplicación (efecto modal).
✅ Aparece una ventana flotante superpuesta con:

### **🔹 Parte superior:**

- Opciones de **"Inicio de Sesión" | "Regístrate"** → La opción **NO seleccionada** debe verse **más opaca**.
- Botón de cierre (cruz) en la esquina superior derecha.

### **🔹 Parte central (cambia según la opción seleccionada):**

#### **✔ Inicio de Sesión:**

- Campo **"Nombre de usuario o correo electrónico"**
- Campo **"Contraseña"**
- Botón **"Iniciar Sesión"**

#### **✔ Registro:**

##### **Datos obligatorios:**

- Nombre
- Primer Apellido
- Segundo Apellido
- DNI
- Teléfono
- Correo Electrónico
- Contraseña
- Repetir Contraseña

##### **Datos opcionales:**

- Ciudad de residencia

- Código postal

- Dirección

- Fecha de nacimiento (Date picker)

- Género (Lista desplegable: Masculino, Femenino, Otro, Prefiero no decirlo)

- Sector o industria (Lista desplegable)

- Checkbox obligatorio para **"Aceptar Términos y Condiciones"**.

### **🔹 Parte inferior:**

- Texto **"Seguir como invitado"**.

---

## **3️⃣ Flujo de Interacción**

✅ **Al cargar la página, por defecto se muestra la opción "Inicio de Sesión"**.
✅ **Si el usuario cambia a "Regístrate", se reemplaza el contenido de la parte central con el formulario de registro**.
✅ **Si el usuario hace clic fuera de la ventana modal o en la cruz de cierre, la ventana desaparece y la interfaz vuelve a su estado normal**.