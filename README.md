# 📚 EstudiantesApp - Entrega Momento 3

## 📌 Descripción del proyecto

EstudiantesApp es una aplicación web desarrollada para la gestión de estudiantes y usuarios. El proyecto fue construido utilizando una arquitectura cliente-servidor, donde:

* El **Backend** fue desarrollado con **Java + Spring Boot**.
* El **Frontend** fue desarrollado con **HTML, CSS y JavaScript**.
* La base de datos utilizada es **H2 Database**.

El sistema permite realizar operaciones CRUD de estudiantes y manejar funcionalidades de usuarios mediante APIs REST.

---

# 🛠️ Tecnologías utilizadas

## Backend

* Java 17
* Spring Boot
* Spring Web MVC
* Spring Data JPA
* Maven
* H2 Database

## Frontend

* HTML5
* CSS3
* JavaScript

---

# 📂 Estructura del proyecto

```bash
EntregaMomento3/
│
├── EstudiantesApp/              # Backend Spring Boot
│   ├── src/main/java/com/example/EstudiantesApp
│   │   ├── configuracion/
│   │   ├── controladores/
│   │   ├── modelos/
│   │   ├── repositorios/
│   │   └── servicios/
│   │
│   ├── src/main/resources/
│   └── pom.xml
│
└── PaginaPrincipal/             # Frontend
    ├── index.html
    ├── login.html
    ├── registro.html
    ├── api1.html
    ├── api2.html
    ├── style.css
    └── archivos JavaScript
```

---

# ⚙️ Funcionalidades principales

## 👨‍🎓 Gestión de estudiantes

* Crear estudiantes
* Consultar estudiantes
* Actualizar estudiantes
* Eliminar estudiantes

## 👤 Gestión de usuarios

* Registro de usuarios
* Inicio de sesión
* Consumo de APIs desde el frontend

---

# 🔌 APIs implementadas

## API 1 - Gestión de estudiantes

Permite administrar la información de estudiantes mediante operaciones CRUD.

### Endpoints principales

| Método | Endpoint          | Descripción           |
| ------ | ----------------- | --------------------- |
| GET    | /estudiantes      | Obtener estudiantes   |
| POST   | /estudiantes      | Crear estudiante      |
| PUT    | /estudiantes/{id} | Actualizar estudiante |
| DELETE | /estudiantes/{id} | Eliminar estudiante   |

---

## API 2 - Gestión de usuarios

Permite registrar y consultar usuarios desde el sistema.

### Endpoints principales

| Método | Endpoint  | Descripción       |
| ------ | --------- | ----------------- |
| GET    | /usuarios | Obtener usuarios  |
| POST   | /usuarios | Registrar usuario |

---

# ▶️ Cómo ejecutar el proyecto

## 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

---

## 2️⃣ Abrir el backend

Entrar a la carpeta:

```bash
cd EstudiantesApp
```

Ejecutar:

```bash
./mvnw spring-boot:run
```

En Windows:

```bash
mvnw.cmd spring-boot:run
```

El backend se ejecutará normalmente en:

```bash
http://localhost:8080
```

---

## 3️⃣ Ejecutar el frontend

Abrir la carpeta `PaginaPrincipal` y ejecutar el archivo:

```bash
index.html
```

Se recomienda usar la extensión **Live Server** de Visual Studio Code.

---

# 🗄️ Base de datos

El proyecto utiliza una base de datos en memoria H2.

## Consola H2

```bash
http://localhost:8080/h2-console
```

---

# 🧩 Arquitectura utilizada

El proyecto sigue una arquitectura en capas:

* Controladores
* Servicios
* Repositorios
* Modelos

Esto permite:

* Mejor organización del código
* Fácil mantenimiento
* Escalabilidad
* Separación de responsabilidades

---

# 💡 Características técnicas

* Arquitectura REST
* Comunicación frontend-backend mediante Fetch API
* Uso de Spring Data JPA
* Persistencia con H2 Database
* Configuración CORS para conexión con frontend
* Diseño modular

---

# 📖 Explicación técnica del software

El sistema funciona mediante un backend desarrollado en Spring Boot que expone APIs REST. El frontend consume estas APIs usando JavaScript y Fetch API para enviar y recibir información.

La información de estudiantes y usuarios se almacena en una base de datos H2 administrada mediante JPA.

---

# 🎯 Objetivo del proyecto

Desarrollar una aplicación web capaz de gestionar estudiantes y usuarios utilizando tecnologías modernas de desarrollo backend y frontend.

---

# 👨‍💻 Autores

Proyecto desarrollado para la entrega académica "Momento 3".
