import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const dbUserName = process.env.BD_USERNAME || 'root';
const dbPassword = process.env.BD_PASSWORD || '';

const db = new Sequelize('typescript-node', dbUserName, dbPassword, {
    host: '192.168.1.205',
    port: 3306,
    dialect: 'mysql',
});

export default db;