import { Router } from "express";

const router = Router();


router.get('/scanner', (req, res) => {


  res.render('scanner');
})





export default router;