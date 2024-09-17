// models.js
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

// Inicializa Sequelize con SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite')
});

// Define el modelo para Habitaciones
const Habitacion = sequelize.define('Habitacion', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    }
});

// Define el modelo para Reservas
const Reserva = sequelize.define('Reserva', {
    nombre_huesped: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true // Activa los timestamps
});

// Relación entre Habitacion y Reserva
Habitacion.hasMany(Reserva, { foreignKey: 'habitacion_id' });
Reserva.belongsTo(Habitacion, { foreignKey: 'habitacion_id' });

// Sincroniza los modelos con la base de datos
const syncModels = async () => {
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos.');
};

module.exports = { sequelize, Habitacion, Reserva, syncModels };
