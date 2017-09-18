/*
// Created: Sep. 18, 2017 8:20 AM
// Author: Jonathan Gryn
// Revisions: Jon (9/18/17) - Started connection.js
*/

// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '3#F0rg0t#3',
        database: 'burgers_db'
    })
};

// Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
        console.log('ERROR: MySQL connection error -- ' + err.stack + + '\n\n');
        return;
    }

    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;