const { sequelize, DataTypes } = require("./sequelize");
    const playlist = sequelize.define(
        "playlist",
        {
            playlistsID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            playlistTitle: {
                type: DataTypes.STRING,
                allowNull: false
            },
            p_users_userID: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =playlist;
