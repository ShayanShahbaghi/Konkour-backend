const connection = require('./connection')
var sql = "CREATE TABLE weekTodo (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY)";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created")
})