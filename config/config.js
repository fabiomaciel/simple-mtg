module.exports = {
    "mongo":{
		"host": process.env.OPENSHIFT_MONGODB_DB_HOST || "localhost",
		"database": process.env.MONGO_DB_NAME || "simplemtg",
		"port": process.env.OPENSHIFT_MONGODB_DB_PORT || 27017,
		"url": process.env.OPENSHIFT_MONGODB_DB_URL
	},
    "port": process.env.NODE_PORT || 8000,
    "log":{
        "error":{
            "filename": process.env.ERROR_FILE_NAME || "simple-mtg.error.log"
        }
    }
};
