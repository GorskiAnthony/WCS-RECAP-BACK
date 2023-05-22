// Va servir de lien entre la DB (database => Mysql) au controller

const findOne = (number) => {
	// vrai requete
	// return connection.query("SELECT * FROM USER WHERE id = ?", [number]);

	// Mais pour l'exemple
	const user = {
		id: number,
		name: "Anthony",
	};
	return user;
};

module.exports = {
	findOne,
};
