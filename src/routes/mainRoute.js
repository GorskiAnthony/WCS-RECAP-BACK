const router = require("express").Router();

const homeRouter = require("./homeRoute");
const userRouter = require("./userRoute");

router.use("/", homeRouter);
router.use("/users", userRouter);

module.exports = router;
