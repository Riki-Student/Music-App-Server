const { sequelize, DataTypes } = require("./sequelize");
    const mood = sequelize.define(
        "mood",
        {
            moodID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            moodTitle: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =mood;
