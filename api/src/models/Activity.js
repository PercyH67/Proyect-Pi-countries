const { DataTypes } = require("sequelize")

// DEFINIMOS EL MODELO PARA ACTIVIDADES
module.exports = (sequelize) =>{
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        dificultad: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false,
        },
        duracion: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
            
        }
    }, {timestamps: false})
}