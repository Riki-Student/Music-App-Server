const { sequelize, DataTypes } = require("./sequelize");
    const album = sequelize.define(
        "album",
        {
            albumID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            albumTitle: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            artists_artistID: {
                type: DataTypes.INTEGER,
            },
        },
        { 
            timestamps: false
        }
    );
    module.exports =album;

