import sequelize from "../database/db.js";
import { DataTypes } from "sequelize";

export const Workout = sequelize.define('Workout',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.ENUM,
            allowNull: false
        },
        distance: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        timeworkout: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        comments: {
            type: DataTypes.TEXT
        }
    });