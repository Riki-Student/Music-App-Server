const { sequelize, DataTypes } = require("./sequelize");
    const genre = sequelize.define(
        "genre",
        {
            genreID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            genreTitle: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =genre;
