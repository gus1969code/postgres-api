import express from "express";
import { PORT } from "./config.js";
import sistemasRouter from "./routes/app/sistemas.routes.js";
import barrasRouter from "./routes/app/barras.routes.js";
import pruebasRouter from "./routes/app/pruebas.routes.js";
import API_equipos from "./routes/API/api_equipos.routes.js";
import app_equipos from "./routes/app/app_equipos.routes.js";
import url from "url";
import path from "path";
//import qr from "./controllers/qr_code.js"

const app = express();

//_                           ejs
app.set("view engine", "ejs");
//_ (import.meta.url); esto es la ruta web
let __filename = url.fileURLToPath(import.meta.url); //_convierte a ruta windows
let __dirname = path.dirname(__filename); //_extra solo el path
app.set("views", path.join(__dirname, "/views"));
//_                           ejs

app.use(express.json());

//_ meddlewere

app.use(express.static("public"));

//_Routes
app.use(sistemasRouter, barrasRouter, pruebasRouter, API_equipos, app_equipos);

//qr();

app.listen(PORT);
console.log("Server on port", PORT);
