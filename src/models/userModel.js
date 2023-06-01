const db = require("../database/config");

const findAll = () => {
	return db.query("SELECT * FROM formateur");
};

const findOne = (number) => {
	const user = db.query("SELECT * FROM formateur WHERE id= ?", [number]);
	return user;
};

const addUser = (user) => {
	return db.query("INSERT INTO formateur (name) VALUES (?)", [user.name]);
	// return db.query("INSERT INTO formateur (name) VALUES (?)", [user.name]);
};

const deleteUser = (id) => {
	return db.query("DELETE FROM formateur WHERE id = ?", [id]);
};

module.exports = {
	findAll,
	findOne,
	addUser,
	deleteUser,
};
