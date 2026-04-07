import { Router } from "express";

const router = Router();


router.get('/scanner', (req, res) => {


  res.render('sanner');
})





export default router;