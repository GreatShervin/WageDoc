import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Allowance from "./Allowance";

export default class Shift extends Model {
    public id!: number;
    public date!: Date;
    public from!: Date;
    public till!: Date;
    public company_id!: number;
    public readonly allowances!: Array<Allowance>;
}

Shift.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        from: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        till: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        company_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
    {
        tableName: "s_Shift",
        sequelize: sequelize,
    }
);

Shift.hasMany(Allowance, { foreignKey: "shift_id" });
Allowance.belongsTo(Shift, { foreignKey: "shift_id", as: "shift" })