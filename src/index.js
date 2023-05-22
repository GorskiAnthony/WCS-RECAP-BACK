const express = require("express");
const app = express();
const PORT = 5500;

//         PORT, CALLBACK = Une fonction dans une fonction
app.listen(PORT, (err) => {
	if (err) {
		console.log(`Oups, une erreur s'est produite, l'erreur : ${err}`);
	} else {
		console.log(`Je suis run sur le port: ${PORT}`);
	}
});
