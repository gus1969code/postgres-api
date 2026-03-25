import { Router } from "express";

const router = Router();


router.get('/pruebas', (req, res) => {


  res.send('Pagina de prueba');
})





export default router;