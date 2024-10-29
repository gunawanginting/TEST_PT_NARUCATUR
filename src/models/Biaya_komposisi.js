import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.js'; 
const Biaya_Komposisi = sequelize.define('Biaya_Komposisi', {

  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  produk:  {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
created_at: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW
  
},

update_at: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW
},

usiaKategoriId: {
  type: DataTypes.INTEGER,
  references: {
      model: 'Usia_Kategori', 
      key: 'id',
  },
}

}, {
tableName: 'Biaya_Komposisi', 
createdAt: 'created_at', 
updatedAt: 'update_at' 
});



export default Biaya_Komposisi

