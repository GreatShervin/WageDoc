import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection/index";
import Shift from "./Shift";

export default class Company extends Model {
    public id!: number;
    public name!: string;
    public beitrittsdatum!: Date;
    public lohn!: number;
    public user_id!: number;
    public readonly shifts!: Array<Shift>;
}

Company.init({
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
    beitrittsdatum: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    lohn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
},
    {
        tableName: "c_Company",
        sequelize: sequelize,
    });

Company.hasMany(Shift, { foreignKey: "company_id" });
Shift.belongsTo(Company, { foreignKey: "company_id", as: "company" })