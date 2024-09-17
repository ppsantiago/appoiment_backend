const express = require('express');
const bodyParser = require('body-parser');
const { Habitacion, Reserva, syncModels } = require('./models');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Sincroniza los modelos y luego inicia el servidor
syncModels().then(() => {
    // Rutas
    // 1. Obtener todas las habitaciones
    app.get('/habitaciones', async (req, res) => {
        try {
            const habitaciones = await Habitacion.findAll();
            res.json({ habitaciones });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // 2. Ver disponibilidad de una habitación (días ocupados)
    app.get('/habitaciones/:id/disponibilidad', async (req, res) => {
        const habitacionId = req.params.id;

        try {
            const reservas = await Reserva.findAll({ where: { habitacion_id: habitacionId } });
            res.json({ disponibilidad: reservas });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // 3. Registrar una nueva reserva
    app.post('/reservas', async (req, res) => {
        const { habitacion_id, nombre_huesped, fecha_inicio, fecha_fin } = req.body;

        if (!habitacion_id || !nombre_huesped || !fecha_inicio || !fecha_fin) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }

        try {
            const reserva = await Reserva.create({ habitacion_id, nombre_huesped, fecha_inicio, fecha_fin });
            res.status(201).json({ reserva_id: reserva.id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // 4. Agregar una nueva habitación
    app.post('/habitaciones', async (req, res) => {
        const { nombre, descripcion } = req.body;

        if (!nombre) {
            return res.status(400).json({ error: 'El nombre de la habitación es obligatorio.' });
        }

        try {
            const habitacion = await Habitacion.create({ nombre, descripcion });
            res.status(201).json({ habitacion_id: habitacion.id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
});
