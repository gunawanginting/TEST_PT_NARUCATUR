import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});


sequelize
  .authenticate()
  .then(() => {
    console.log("berhasil koneksi ke database");
  })
  .catch((err) => {
    console.error("error pada saat koneksi ke database", err);
  });

export default sequelize;
