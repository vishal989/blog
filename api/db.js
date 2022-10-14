import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Arya@989',
  database: 'blog',
});
