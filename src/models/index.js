import Usia_Kategori from "./Usia_kategori.js";
import Biaya_Komposisi from "./Biaya_komposisi.js";
import Biaya_Admin from "./Biaya_Admin.js";

Biaya_Komposisi.hasMany(Biaya_Admin, {
    foreignKey: 'BiayaKategoriId',
    as: 'biayaadmin',
});

Biaya_Admin.belongsTo(Biaya_Komposisi, {
    foreignKey: 'BiayaKategoriId',
    as: 'biayakomposisi'
});


Usia_Kategori.hasMany(Biaya_Komposisi, {
    foreignKey: 'usiaKategoriId',
    as: 'biayaKomposisi', 
});


Biaya_Komposisi.belongsTo(Usia_Kategori, {
    foreignKey: 'usiaKategoriId',
    as: 'usiakategori', 
});

const models = {
    Usia_Kategori,
    Biaya_Komposisi,
    //Biaya_Admin,
};

export default models;
