import { Router } from "express";
import { pool } from "../../db.js";


const router = Router();


router.get('/api_equipos', async (req, res) => {

 const { rows } = await pool.query("select * from equipos");
  res.json(rows);
})
  
router.get("/api_equipos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query(
      `select * from equipos where id_equipo = ${id}`,
    );

    if (rows.length === 0) {
      res.json({ Error: "No existe este codigo" });
    } else {
      res.json(rows);
    }
  } catch (error) {
    res.json({ Error: error.code });
  }
});







router.post("/api_equipos", async (req, res) => {
  const data = req.body;
  //console.log(data);
  await pool.query(`INSERT INTO equipos(
  nombre, descripcion, sistema)
  VALUES ( '${data.nombre}', '${data.descripcion}', '${data.sistema})'`);
  res.send("Creando un  equipos");
});

router.delete("/api_equipos/:id", async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  await pool.query(`DELETE FROM equipos WHERE id_equipo = '${id}'`);

  res.send("Eliminando equipo" + "   " + ":" + id);
});

router.put("/api_equipos/:id", (req, res) => {
  const { id } = req.params;
  res.send("Actualizando equipo" + id);
});




export default router;