const router = require("express").Router();

const userController = require("../controllers/userController");

/**
 * USER
 */
router.post("/", userController.postUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getOneUser);
router.put("/", userController.putUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
