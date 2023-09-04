const { sequelize, DataTypes } = require("./sequelize");
    const artist = sequelize.define(
        "artist",
        {
            artistID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            artistName: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =artist;
