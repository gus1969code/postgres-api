import { Router } from "express";

const router = Router();


router.get('/equipos', (req, res) => {


  res.json({
    nombre: "bomba",
    marca: "hitachi" 
  });
})





export default router;