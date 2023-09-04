const { sequelize, DataTypes } = require("./sequelize");
    const playlists2song = sequelize.define(
        "playlists2song",
        {
            p_songs_songID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            p_playlists_playlistID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }

        },
        { 
            timestamps: false
        }
    );
    module.exports = playlists2song;
