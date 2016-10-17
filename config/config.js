module.exports = {
    "mongo":{
		"host": process.env.MONGO_HOST || "localhost",
		"database": process.env.MONGO_DB_NAME || "test"
	},
    "port": process.env.PORT || 8000,
};
