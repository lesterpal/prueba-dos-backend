# 🚀 BACKEND - COLECCIÓN DE EMPLEADOS Y DEPARTAMENTOS

## 📌 Descripción

API RESTful desarrollada para gestionar una colección de **empleados** y **departamentos**, permitiendo realizar operaciones CRUD completas. 

---

## 🛠️ Tecnologías Utilizadas

* **Node.js**
* **Express**
* **MongoDB**
* **Postman**

---

## ✅ Funcionalidades

* ✔️ CRUD de empleados
* ✔️ CRUD de departamentos
* ✔️ Consulta personalizada: `readEmpleados`

---

## 🧩 Arquitectura y Características

* API RESTful estructurada
* Separación por capas (controllers, models, routes)
* Conexión a base de datos NoSQL (MongoDB)
* Manejo de rutas modular
* Uso de variables de entorno
* Preparado para escalabilidad

---

## 📁 Estructura del Proyecto

```bash
├── node_modules/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routers/
│   └── server.js
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Instalación (Backend)

```bash
# Inicializar proyecto
npm init -y

# Dependencias de desarrollo
npm i -D nodemon mongo

# Dependencias principales
npm i express
```

---

## 🔐 Variables de Entorno

Ejemplo de archivo `.env`:

```env
PORT=3400
MONGO_URI=mongodb
```

---

## 🔗 Endpoints Principales

| Método | Endpoint           | Descripción                      |
| ------ | ------------------ | -------------------------------- |
| GET    | /empleados         | Obtener todos los empleados      |
| GET    | /empleados/:id     | Obtener empleado por ID          |
| POST   | /empleados         | Crear nuevo empleado             |
| PUT    | /empleados/:id     | Actualizar empleado              |
| DELETE | /empleados/:id     | Eliminar empleado                |
| GET    | /departamentos     | Obtener todos los departamentos  |
| POST   | /departamentos     | Crear nuevo departamento         |
| PUT    | /departamentos/:id | Actualizar departamento          |
| DELETE | /departamentos/:id | Eliminar departamento            |
| GET    | /readEmpleados     | Consulta personalizada empleados |

---

## 📄 Licencia

Este proyecto es de uso educativo.

## 👨‍💻 Autor
## Software Developer

Built by [LESTER](https://github.com/lesterpal) ©️ 2026
Found a bug or have an idea? [Contact me](www.linkedin.com/in/lester-palacio-b7a63b2b0).

```