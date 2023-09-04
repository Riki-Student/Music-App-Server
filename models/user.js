const { sequelize, DataTypes } = require("./sequelize");
    const user = sequelize.define(
        "user",
        {
            userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            premium: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { 
            timestamps: false
        }
    );
    module.exports = user;
