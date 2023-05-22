const userModel = require("../models/userModel");

/**
 * Création de la route : GET qui me retourne une chaîne de caractère
 * "Salut la compagnie !"
 * ⬇️
 */
const getUser = (req, res) => {
	const user = userModel.findOne(5);
	// Ici, le console.log n'est disponible QUE pour le backend
	// console.log("Salut la compagnie !");
	// res.send renvoi une donnée vers le périphérique qui l'a appelé
	res.json({
		user,
		limit: parseInt(req.query.limit, 10),
	});
};

const postUser = (req, res) => {
	const user = {
		name: req.body.name,
		lastName: req.body.lastName,
	};

	res.json({
		user: {
			id: 2,
			...user,
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
	// méthode 1
	const { id } = req.params;
	res.json({
		message: `User ${id} deleted`,
	});
	// res.json({
	// 	message: `User ${req.params.id} deleted`,
	// });
};

module.exports = {
	getUser,
	putUser,
	postUser,
	deleteUser,
};
