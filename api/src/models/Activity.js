const { DataTypes } = require("sequelize")


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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
            
        }
    })
}