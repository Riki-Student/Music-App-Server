const { sequelize, DataTypes } = require("./sequelize");
    const likedalbum = sequelize.define(
        "likedalbum",
        {
            lal_albums_albumID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            lal_users_userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =likedalbum;
