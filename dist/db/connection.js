"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbUserName = process.env.BD_USERNAME || 'root';
const dbPassword = process.env.BD_PASSWORD || '';
const db = new sequelize_1.Sequelize('typescript-node', dbUserName, dbPassword, {
    host: '192.168.1.205',
    port: 3306,
    dialect: 'mysql',
});
exports.default = db;
//# sourceMappingURL=connection.js.map