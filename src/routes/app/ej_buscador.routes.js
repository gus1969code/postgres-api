import { Router } from "express";

const router = Router();


router.get('/ej_buscador', (req, res) => {


  res.render('ej_buscador');
})





export default router;