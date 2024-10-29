import express from "express";
const app=express()
const port=3002

import routes from "./routes/index.js";
import appMiddleware from "./middleware/index.js";
import session from 'express-session';


import path from "path";
import url from "url";
const __dirname=path.dirname(url.fileURLToPath(import.meta.url));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));




app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(appMiddleware);
app.use("/", routes);
app.listen(port, () => {
    console.log(`example app listen at http://localhost:${port}`)
});


