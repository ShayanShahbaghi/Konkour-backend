const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port:8889,
    database: 'dars'
});
  
connection.connect((err) => {
    if (err) throw err
})
module.exports = connection