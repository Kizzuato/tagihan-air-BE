import { Sequelize } from "sequelize";

const db = new Sequelize('tgh_air','Kizzuato','oop',{
    host:'localhost',
    dialect:'mysql'
});

export default db;