const mysql = require('mysql2/promise');
const config = require('../settings');

class Model {
  constructor(table) {
    this.table = table;
  }

  async select(columns, clause) {
    const connection = await mysql.createConnection(config.connectionString,
      { multipleStatements: true });
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) {
      query += ' WHERE ';
    }
    for (var i in clause)  {
      query += ` ${i}  = ${clause[i]} `
      query += ` AND `
    }
    if (clause) {
      query = query.substring(0, query.length - 4);
    }
    console.log(query);
    const [ results, ] = await connection.execute(query);
    return results;
  }

  async Update(params) {
    const connection = await mysql.createConnection(config.connectionString);
    var p;
    var anyparam = false;
    let query = `CALL ${this.table}(`;
    for (p in params) {
      anyparam = true;
      query += `'`;
      query += params[p];
      query += `',`;
    }
    if (anyparam) {
      query = query.substring(0, query.length - 1);
    }
    query += ')';
    console.log(query);
    await connection.execute(query);
    return null;
  }
}

export default Model;
