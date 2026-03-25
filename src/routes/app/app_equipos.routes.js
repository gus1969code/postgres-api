import { Router } from "express";

const router = Router();


router.get('/app_equipos', (req, res) => {


  res.render('app_equipos');
})





export default router;