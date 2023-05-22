const express = require("express");
const app = express();
const PORT = 5500;

const homeRouter = require("./routes/homeRoute");

const userController = require("./controllers/userController");

app.use("/api", homeRouter);

/**
 * USER
 */
app.post("/users", userController.postUser);
app.get("/users", userController.getUser);
app.put("/users", userController.putUser);
app.delete("/users", userController.deleteUser);

//         PORT, CALLBACK = Une fonction dans une fonction
app.listen(PORT, (err) => {
	if (err) {
		console.log(`Oups, une erreur s'est produite, l'erreur : ${err}`);
	} else {
		console.log(`Je suis run sur le port: ${PORT}`);
	}
});
