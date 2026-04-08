import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
  //const data = req.query.data;
  
 // console.log(data);

  res.render('index');
})





export default router;