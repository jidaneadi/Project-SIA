require('dotenv').config();
const {db_host, db_name, db_user, db_pass} = process.env;

module.exports = {
  "development": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql"
  },
  "test": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql"
  },
  "production": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql"
  }
}
