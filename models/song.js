const { sequelize, DataTypes } = require("./sequelize");
    const song = sequelize.define(
        "song",
        {
            songID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            songName: {
                type: DataTypes.STRING,
                allowNull: false,
            },     
            duration: {
                type: DataTypes.TIME,
                allowNull: false
            },
            dateReleased: {
                type: DataTypes.DATEONLY,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            path: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            genrers_genreID: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            s_albums_albumID:{
                type: DataTypes.INTEGER
            },
            s_artists_artistID:{
                type: DataTypes.INTEGER
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports = song;
