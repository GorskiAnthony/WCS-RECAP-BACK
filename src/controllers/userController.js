const userModel = require("../models/userModel");

/**
 * Création de la route : GET qui me retourne une chaîne de caractère
 * "Salut la compagnie !"
 * ⬇️
 */
const getUser = (req, res) => {
	userModel
		.findAll()
		.then(([users]) => {
			res.json({
				users,
			});
		})
		.catch((err) => console.error(err));
};
const getOneUser = async (req, res) => {
	try {
		const [[user]] = await userModel.findOne(req.params.id);

		if (user) {
			res.json({
				user,
			});
		} else {
			return res.json({ message: "user not found" });
		}
	} catch (error) {
		res.status(500).send("Error server");
	}
};

const postUser = async (req, res) => {
	try {
		const { name, lastname } = req.body;

		const user = {
			name,
		};

		const add = await userModel.addUser(user);

		if (add[0].affectedRows === 1) {
			res.status(201).json({ message: "User added" });
		} else {
			res.status(500).json({ message: "User already exist" });
		}
	} catch (error) {
		res.status(500).send("error server");
	}
};

/**
const postUser = (req, res) => {

	// tu desctructures les données de req.body ✅
  const { firstname, lastname, email, city, language } = req.body;

  database.query = dans un autre fichier,  car ce n'est pas au controller de faire la connexion à la DB. C'est le role du model. ✅

 -> database
   .query("INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
     [firstname, lastname, email, city, language]) <-
   .then(([result]) => {
    res.location(`/api/users/${result.insertId}`).sendStatus(201); ✅
   })
   .catch((err) => {
    console.error(err);
    res.status(500).send("Error saving the movie");
   })
};

 */

const putUser = (req, res) => {
	res.json({
		user: {
			id: 2,
			name: "Patrick",
		},
	});
};

const deleteUser = (req, res) => {
	const { id } = req.params;
	userModel
		.deleteUser(id)
		.then(([result]) => {
			if (result.affectedRows === 1) {
				res.status(200).json({ message: "User deleted" });
			} else {
				res.status(500).json({ message: "User not found" });
			}
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error deleting user");
		});
};

module.exports = {
	getUser,
	getOneUser,
	putUser,
	postUser,
	deleteUser,
};
