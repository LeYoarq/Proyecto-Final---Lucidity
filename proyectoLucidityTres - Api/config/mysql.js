const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'foo',
    database: 'lucidityFinal',
    password: 'bar'
});

module.exports = pool.promise();