import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection";

export default class Verification extends Model {
    public id!: number;
    public code!: number;
}

Verification.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "v_Verification",
        sequelize: sequelize,
    }
);