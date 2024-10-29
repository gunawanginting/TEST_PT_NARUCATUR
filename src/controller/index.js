import Usia_Kategori from "../models/Usia_kategori.js";
import Biaya_Komposisi from "../models/Biaya_komposisi.js";
import Biaya_Admin from "../models/Biaya_Admin.js";
import models from "../models/index.js";


const getBiayaKomposisi = async (req, res) => {
  try {
    const biayaKomposisi = await Biaya_Komposisi.findAll({
      include: [
        {
          model: Usia_Kategori,
          as: "usiakategori", 
          attributes: ["id", "kategori"],
        },
        {
          model: Biaya_Admin,
          as: "biayaadmin",
          attributes: ["id", "kategori"],
        },
      ],
    });

 
    res.render("biayakomposisi", { data: biayaKomposisi });
  } catch (error) {
    console.error("Error saat mengirim  data:", error);
    res.status(500).send("Terjadi kesalahan pada server");
  }
};



const updateUsiaKategori = async (req, res) => {
  try {
    const { id } = req.params;
    const { kategori } = req.body;

    if (!kategori) {
      return res.status(400).json({
        status: "error",
        title: "Gagal",
        message: "tidak boleh kosong",
      });
    }

    const usiaKategori = await Usia_Kategori.findByPk(id);
    if (!usiaKategori) {
      return res.status(404).json({
        status: "error",
        title: "Gagal",
        message: "usia tidak ditemukan",
      });
    }

    await usiaKategori.update({ kategori });

    return res.status(200).json({
      status: "success",
      title: "Berhasil",
      message: "usia berhasil diperbarui",
      data: usiaKategori,
    });
  } catch (err) {
    console.error("kesalahan update Usia_Kategori:", err);
    return res.status(500).json({
      status: "error",
      title: "Gagal",
      message: "Terjadi kesalahan pada server",
    });
  }
};

export { updateUsiaKategori, getBiayaKomposisi };