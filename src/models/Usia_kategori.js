import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';

const Usia_Kategori = sequelize.define('Usia_Kategori', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kategori: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'Usia_Kategori',
    timestamps: false,
  });

  
  export default Usia_Kategori;
  