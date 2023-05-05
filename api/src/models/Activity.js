const { DataTypes } = require("sequelize")


module.exports = (sequelize) =>{
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true

        },
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.INTEGER
        },
        duration: {
            type: DataTypes.TIME
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
        }
    })
}