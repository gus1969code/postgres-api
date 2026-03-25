import { Router } from "express";

const router = Router();


router.get('/barras', (req, res) => {


  res.render('barras');
})





export default router;