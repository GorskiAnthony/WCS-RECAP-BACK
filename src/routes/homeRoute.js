const router = require("express").Router();

const homeController = require("../controllers/homeController");

/**
 * HOME
 */
// .get(la route, callback )
// Pour tester ma route, je vais sur postman / insomnia / navigateur (uniquement pour le get)
// avec l'url suivante POUR MON CAS
// http://localhost:5500

router.post("/", homeController.postWelcome);
router.get("/", homeController.getWelcome);
router.put("/", homeController.putWelcome);
router.delete("/", homeController.deleteWelcome);

module.exports = router;
