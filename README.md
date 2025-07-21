```markdown
# 🖥️ Frontend - Aplicación de Gestión de Órdenes y Productos

Este es el frontend de una aplicación web desarrollada con [Next.js](https://nextjs.org/), diseñada para interactuar con una API backend construida en NestJS. La interfaz permite a los usuarios gestionar órdenes y productos de forma sencilla y segura mediante autenticación basada en tokens.

---

## 📑 Índice

1. [📦 Requisitos](#-requisitos)  
2. [⚙️ Instalación y Configuración](#-instalación-y-configuración)  
3. [🚀 Scripts Disponibles](#-scripts-disponibles)  
4. [🌍 Variables de Entorno](#-variables-de-entorno)  
5. [🧭 ¿Qué hace esta aplicación?](#-qué-hace-esta-aplicación)  
6. [🚪 Cierre de Sesión](#-cierre-de-sesión)  
7. [📝 Notas Finales](#-notas-finales)

---

## 📦 Requisitos

- Node.js v18+
- npm
- Acceso a la API NestJS en funcionamiento
- MongoDB (Atlas) configurado en el backend

---

## ⚙️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-org/tu-frontend.git
cd tu-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear el archivo `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> En producción, reemplaza `NEXT_PUBLIC_API_URL` por tu dominio:  
> `https://xxxxx.com`

---

## 🚀 Scripts Disponibles

```bash
npm run build     # Compila para producción
npm run start     # Inicia la app compilada en producción
```

La aplicacion correra en localhost:4000
---

## 🌍 Variables de Entorno

| Variable              | Descripción                                |
|-----------------------|--------------------------------------------|
| `NEXT_PUBLIC_API_URL` | URL base de la API backend (NestJS)        |

---

## 🧭 ¿Qué hace esta aplicación?

Esta aplicación permite a los usuarios registrados gestionar órdenes y productos de forma simple:

### ✅ Registro e Inicio de Sesión

- Los nuevos usuarios pueden crear una cuenta ingresando su correo y contraseña.
- Los usuarios existentes pueden iniciar sesión para acceder a sus recursos.
- Una vez autenticados, los usuarios obtienen acceso completo a las funciones protegidas de la app.

### 🗃️ Gestión de Órdenes

- Visualiza un listado de todas tus órdenes creadas.
- Crea nuevas órdenes con información personalizada (por definir).
- Edita o elimina órdenes existentes según necesidad.
- Cada orden actúa como un contenedor de productos.

### 🛒 Gestión de Productos

- Agrega productos a cualquier orden.
- Visualiza el detalle de los productos asociados a cada orden.
- Elimina productos de una orden específica.

### 🔒 Seguridad y Sesión

- Toda la navegación protegida requiere autenticación.
- Se guarda un token de acceso (JWT) en el almacenamiento del navegador.
- El sistema valida automáticamente si el usuario está autenticado al acceder a rutas privadas.

---

## 🚪 Cierre de Sesión

- Puedes cerrar sesión con un solo clic.
- Al cerrar sesión, se elimina el token y se redirige al usuario a la pantalla de inicio de sesión.
- Toda la sesión queda invalidada hasta nuevo inicio.

---

## 📝 Notas Finales

- La aplicación está construida con enfoque modular y escalable.
- Este frontend es totalmente funcional en conjunto con su API NestJS correspondiente.

---
```
