import { Model, DataTypes, DecimalDataType } from "sequelize";
import { sequelize } from "../connection";
import Shift from "./Shift";

export default class Allowance extends Model {
    public id!: number;
    public name!: string;
    public multiplicator!: DecimalDataType;
    public shift_id!: number;
}

Allowance.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        multiplicator: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        shift_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
    {
        tableName: "a_Allowance",
        sequelize: sequelize,
    }
);
