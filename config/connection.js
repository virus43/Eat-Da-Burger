var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ujjrzpp5duvib099",
  password: "bw1ppxsazgkxoxz6",
  database: "b4rqk5zgaemap4dh"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
