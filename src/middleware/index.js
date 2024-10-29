import express from "express";
const appMiddleware=express()


import path from "path";
import url from "url";
const __dirname=path.dirname(url.fileURLToPath(import.meta.url));



appMiddleware.use(express.static(path.join(__dirname, "../../public")));


export default appMiddleware;
