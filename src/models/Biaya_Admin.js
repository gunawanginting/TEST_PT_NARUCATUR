import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Biaya_Admin = sequelize.define('Biaya_Admin', {

    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    komposisi: {
        type: DataTypes.STRING,
        allowNull:false,
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

    kategori: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },

    AdminKategoriId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Biaya_Komposisi',
            key: 'id',
        },
    }

}, {
 tableName: 'Biaya_Admin',
 createdAt: 'created_at',
 updatedAt: 'updated_at'
})

export default Biaya_Admin