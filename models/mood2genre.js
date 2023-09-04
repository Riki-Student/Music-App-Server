const { sequelize, DataTypes } = require("./sequelize");
    const mood2genre = sequelize.define(
        "mood2genre",
        {
            mood_moodID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            genres_genreID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =mood2genre;
