import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection/index";
import Company from "./Company";

export default class User extends Model {
    public id!: number;
    public first_name!: string;
    public second_name!: string;
    public email!: string;
    public password!: string;
    public birthday!: Date;
    public verified!: boolean;
    public readonly companys!: Array<Company>;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        second_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        tableName: "u_User",
        sequelize: sequelize,
    }
);

User.hasMany(Company, { foreignKey: "user_id" });
Company.belongsTo(User, { foreignKey: "user_id", as: "user" })