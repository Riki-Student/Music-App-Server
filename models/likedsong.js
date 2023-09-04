const { sequelize, DataTypes } = require("./sequelize");
    const likedsong = sequelize.define(
        "likedsong",
        {
            ls_users_userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            ls_songs_songID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =likedsong;
