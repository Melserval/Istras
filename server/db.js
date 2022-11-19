const mysql = require("mysql2");

const DBOptions = {
    host: 'localhost',
    user: 'root',
    database: 'istras'
};

exports.getConnection = mysql.createConnection.bind(mysql, DBOptions);