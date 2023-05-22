const express = require("express");
const app = express();
const PORT = 5500;

/**
 * Création de la route : GET qui me retourne une chaîne de caractère
 * "Salut la compagnie !"
 * ⬇️
 */
const getWelcome = (req, res) => {
	// Ici, le console.log n'est disponible QUE pour le backend
	// console.log("Salut la compagnie !");
	// res.send renvoi une donnée vers le périphérique qui l'a appelé
	res.json({
		message: "Salut la compagnie !",
	});
};
const postWelcome = (req, res) => {
	res.json({
		message: "Je suis nouveau !",
	});
};
const putWelcome = (req, res) => {
	res.json({
		message: "Je me met à jour !",
	});
};
const deleteWelcome = (req, res) => {
	res.json({
		message: "C'est ciao !",
	});
};

// .get(la route, callback )
// Pour tester ma route, je vais sur postman / insomnia / navigateur (uniquement pour le get)
// avec l'url suivante POUR MON CAS
// http://localhost:5500
app.post("/", postWelcome);
app.get("/", getWelcome);
app.put("/", putWelcome);
app.delete("/", deleteWelcome);

//         PORT, CALLBACK = Une fonction dans une fonction
app.listen(PORT, (err) => {
	if (err) {
		console.log(`Oups, une erreur s'est produite, l'erreur : ${err}`);
	} else {
		console.log(`Je suis run sur le port: ${PORT}`);
	}
});
