import { Router } from "express";

const router = Router();




router.get("/scanner", (req, res) => {
  res.render("./app_equipos/scanner");
});












router.get("/dashboard", (req, res) => {
  res.render("./app_equipos/dashboard");
});


router.get('/app_equipos', (req, res) => {
    res.render("./app_equipos/app_equipos");
 
});
router.get("/api_equipos/:id", async (req, res) => {
  
  const { id } = req.params;

  
});






export default router;