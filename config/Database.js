import { Sequelize } from "sequelize";

const db = new Sequelize('tgh_air','kizzuato','13032007',{
    host:'localhost',
    dialect:'mysql'
});

export default db;