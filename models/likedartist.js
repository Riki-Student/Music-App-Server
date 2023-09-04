const { sequelize, DataTypes } = require("./sequelize");
    const likedartist = sequelize.define(
        "likedartist",
        {
            lar_artists_artistID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            lar_users_userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports =likedartist;
