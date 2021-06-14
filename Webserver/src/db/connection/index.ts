import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const createConnection = () => {
    const conn = new Sequelize(
        "wagedoc",
        "root",
        "mariadb",
        {
            host: "localhost",
            dialect: "mariadb",
            port: 3306,
            define: {
                timestamps: false
            }
        }
    );
    return conn;
};

export const sequelize = createConnection();
