import express from "express";
import { updateUsiaKategori } from "../controller/index.js";
import { getBiayaKomposisi } from "../controller/index.js"; 
const routes = express.Router();

routes.get("/biaya-komposisi", getBiayaKomposisi);
  


export default routes;
