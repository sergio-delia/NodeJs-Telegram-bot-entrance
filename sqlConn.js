require("dotenv").config();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.dbUser,
  password : process.env.dbPassword,
  database : process.env.dbName
});
 
function executeQuery(sql, params, callback){
    connection.query(sql, params, callback);
}

module.exports = executeQuery;
