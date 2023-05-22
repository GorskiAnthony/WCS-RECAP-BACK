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
		message: "Super la fête chez Oyhana !",
	});
};
const postWelcome = (req, res) => {
	res.json({
		message: "Je suis nouvelle !",
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

module.exports = {
	getWelcome,
	putWelcome,
	postWelcome,
	deleteWelcome,
};
