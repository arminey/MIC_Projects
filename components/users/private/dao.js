const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao');
const con = require('./../../core/db-connection');

class UserDAO extends BaseDao {
    constructor() {
      super(con.model('users'));
    }
}
module.exports = new UserDAO();
