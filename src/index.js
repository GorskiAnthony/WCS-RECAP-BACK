const express = require("express");
const app = express();
const PORT = 5500;

const homeController = require("./controller/homeController");

// .get(la route, callback )
// Pour tester ma route, je vais sur postman / insomnia / navigateur (uniquement pour le get)
// avec l'url suivante POUR MON CAS
// http://localhost:5500
app.post("/", homeController.postWelcome);
app.get("/", homeController.getWelcome);
app.put("/", homeController.putWelcome);
app.delete("/", homeController.deleteWelcome);

//         PORT, CALLBACK = Une fonction dans une fonction
app.listen(PORT, (err) => {
	if (err) {
		console.log(`Oups, une erreur s'est produite, l'erreur : ${err}`);
	} else {
		console.log(`Je suis run sur le port: ${PORT}`);
	}
});
