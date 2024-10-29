import { DataTypes } from "sequelize";
import Sequelize from "../utils/db.js";
import Produk from "./Biaya_komposisi.js";



const Komposisi = Sequelize .define('Komposisi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    Komposisi: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

        update_now: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

        produkId: {
            type: DataTypes.INTEGER,
            references: {
                model: Produk,
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },

    }, {
        tableName: 'Komposisi', 
        createdAt: 'created_at', 
        updatedAt: 'update_at' 
        
})

export default Komposisi;