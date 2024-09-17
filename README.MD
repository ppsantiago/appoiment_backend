🇺🇸 
# Reservation Management System

This project is a simple API developed with Node.js and Express, which allows managing rooms and reservations for a lodging system. It uses Sequelize as an ORM and SQLite as the database.

## Features

- **Get all rooms**: Lists all available rooms in the system.
- **Check room availability**: Shows the occupied dates for a specific room.
- **Register a new reservation**: Allows creating a reservation for a room.
- **Add a new room**: Adds new rooms to the system.

## Installation

1. Clone the repository:

   ```
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_NAME>
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   node app.js
   ```

   The server will be available at `http://localhost:3000`.

## Endpoints

### 1. Get all rooms

**GET** `/rooms`

- **Description**: Returns the list of all available rooms.
- **Response**:
  ```
  {
      "rooms": [
          {
              "id": 1,
              "name": "Room 1",
              "description": "Description of the room"
          }
      ]
  }
  ```

### 2. Check room availability

**GET** `/rooms/:id/availability`

- **Description**: Shows existing reservations for a room (by its ID).
- **Response**:
  ```
  {
      "availability": [
          {
              "id": 1,
              "guest_name": "Juan Pérez",
              "start_date": "2024-09-10T00:00:00.000Z",
              "end_date": "2024-09-15T00:00:00.000Z"
          }
      ]
  }
  ```

### 3. Register a new reservation

**POST** `/reservations`

- **Description**: Creates a new reservation for a room.
- **Body**:
  ```
  {
      "room_id": 1,
      "guest_name": "Juan Pérez",
      "start_date": "2024-09-10",
      "end_date": "2024-09-15"
  }
  ```
- **Response**:
  ```
  {
      "reservation_id": 1
  }
  ```

### 4. Add a new room

**POST** `/rooms`

- **Description**: Adds a new room to the system.
- **Body**:
  ```
  {
      "name": "Room 2",
      "description": "Room with a sea view"
  }
  ```
- **Response**:
  ```
  {
      "room_id": 2
  }
  ```

## Models

### Room

- **name**: Name of the room (required).
- **description**: Description of the room.

### Reservation

- **guest_name**: Name of the guest (required).
- **start_date**: Start date of the reservation (required).
- **end_date**: End date of the reservation (required).

## Database

This project uses SQLite as the database. The database file is automatically generated at `./database.sqlite` when the models are synchronized.

## Dependencies

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)

## License

This project is licensed under the MIT License. You can see more details in the [LICENSE](./LICENSE) file.

🇪🇸 
# Sistema de Gestión de Reservas

Este proyecto es una API simple desarrollada con Node.js y Express, que permite gestionar habitaciones y reservas de un sistema de hospedaje. Utiliza Sequelize como ORM y SQLite como base de datos.

## Características

- **Obtener todas las habitaciones**: Lista todas las habitaciones disponibles en el sistema.
- **Ver disponibilidad de una habitación**: Muestra las fechas ocupadas de una habitación específica.
- **Registrar una nueva reserva**: Permite registrar una reserva para una habitación.
- **Agregar una nueva habitación**: Añade nuevas habitaciones al sistema.

## Instalación

1. Clona el repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Inicia el servidor:

   ```
   node app.js
   ```

   El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### 1. Obtener todas las habitaciones

**GET** `/habitaciones`

- **Descripción**: Devuelve la lista de todas las habitaciones disponibles.
- **Respuesta**:
  ```
  {
      "habitaciones": [
          {
              "id": 1,
              "nombre": "Habitación 1",
              "descripcion": "Descripción de la habitación"
          }
      ]
  }
  ```

### 2. Ver disponibilidad de una habitación

**GET** `/habitaciones/:id/disponibilidad`

- **Descripción**: Muestra las reservas existentes para una habitación (por su ID).
- **Respuesta**:
  ```
  {
      "disponibilidad": [
          {
              "id": 1,
              "nombre_huesped": "Juan Pérez",
              "fecha_inicio": "2024-09-10T00:00:00.000Z",
              "fecha_fin": "2024-09-15T00:00:00.000Z"
          }
      ]
  }
  ```

### 3. Registrar una nueva reserva

**POST** `/reservas`

- **Descripción**: Crea una nueva reserva para una habitación.
- **Cuerpo**:
  ```
  {
      "habitacion_id": 1,
      "nombre_huesped": "Juan Pérez",
      "fecha_inicio": "2024-09-10",
      "fecha_fin": "2024-09-15"
  }
  ```
- **Respuesta**:
  ```
  {
      "reserva_id": 1
  }
  ```

### 4. Agregar una nueva habitación

**POST** `/habitaciones`

- **Descripción**: Añade una nueva habitación al sistema.
- **Cuerpo**:
  ```
  {
      "nombre": "Habitación 2",
      "descripcion": "Habitación con vista al mar"
  }
  ```
- **Respuesta**:
  ```
  {
      "habitacion_id": 2
  }
  ```

## Modelos

### Habitación

- **nombre**: Nombre de la habitación (obligatorio).
- **descripcion**: Descripción de la habitación.

### Reserva

- **nombre_huesped**: Nombre del huésped (obligatorio).
- **fecha_inicio**: Fecha de inicio de la reserva (obligatorio).
- **fecha_fin**: Fecha de fin de la reserva (obligatorio).

## Base de Datos

Este proyecto utiliza SQLite como base de datos. El archivo de la base de datos se genera automáticamente en la ruta `./database.sqlite` cuando los modelos se sincronizan.

## Dependencias

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver más detalles en el archivo [LICENSE](./LICENSE).
