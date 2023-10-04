const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

function _criaTabela() {
    const promisse = new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config)
        const sqlCreateTable = 'CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key (id));'
        connection.query(sqlCreateTable, function (error, results, fields) {
            if (error) reject(error);
            console.log(results);
            resolve(results);
        })
        connection.end()
    });
}

function _insereDadosTabela() {
    const promisse = new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config)
        const sql = `INSERT INTO people (name) VALUES ('Tobias')`
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            console.log(results);
            resolve(results);
        })
        connection.end()
    });
}

async function inicializaDb() {
    await _criaTabela();
    return _insereDadosTabela();
}

function consultaPessoas() {
    const promisse = new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config)
        const sql = `SELECT * FROM people`
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            console.log(results);
            resolve(results);
        })
        connection.end()
    });
    return promisse;
}

module.exports = { inicializaDb, consultaPessoas }