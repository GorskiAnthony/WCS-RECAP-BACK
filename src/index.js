const express = require("express");
const app = express();
const PORT = 5500;

const homeController = require("./controller/homeController");
const userController = require("./controller/userController");

/**
 * HOME
 */
// .get(la route, callback )
// Pour tester ma route, je vais sur postman / insomnia / navigateur (uniquement pour le get)
// avec l'url suivante POUR MON CAS
// http://localhost:5500
app.post("/", homeController.postWelcome);
app.get("/", homeController.getWelcome);
app.put("/", homeController.putWelcome);
app.delete("/", homeController.deleteWelcome);

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
