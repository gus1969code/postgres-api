import { Router } from "express";
import { pool } from "../../db.js";

const router = Router();

router.get("/sistemas", async (req, res) => {
  const { rows } = await pool.query("select * from sistemas");
  res.json(rows);
});

router.get("/sistemas/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    `select * from sistemas where id_sistema = ${id}`,
  );
  res.json(rows);
});

router.post("/sistemas", async (req, res) => {
  const data = req.body;
  //console.log(data);
  await pool.query(`INSERT INTO sistemas(
	nombre, descripcion)
	VALUES ( '${data.nombre}', '${data.descripcion}')`);
  res.send("Creando un  sistemas");
});

router.delete("/sistemas/:id", (req, res) => {
  const { id } = req.params;
  res.send("Eliminando sistema" + id);
});

router.put("/sistemas/:id", (req, res) => {
  const { id } = req.params;
  res.send("Actualizando sistema" + id);
});

export default router;
