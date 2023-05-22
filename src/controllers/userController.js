/**
 * Création de la route : GET qui me retourne une chaîne de caractère
 * "Salut la compagnie !"
 * ⬇️
 */
const getUser = (req, res) => {
	// Ici, le console.log n'est disponible QUE pour le backend
	// console.log("Salut la compagnie !");
	// res.send renvoi une donnée vers le périphérique qui l'a appelé
	res.json({
		user: {
			id: 1,
			name: "Anthony",
		},
	});
};
const postUser = (req, res) => {
	res.json({
		user: {
			id: 2,
			name: "Bob",
		},
	});
};
const putUser = (req, res) => {
	res.json({
		user: {
			id: 2,
			name: "Patrick",
		},
	});
};
const deleteUser = (req, res) => {
	res.json({
		message: "User 1 deleted",
	});
};

module.exports = {
	getUser,
	putUser,
	postUser,
	deleteUser,
};
