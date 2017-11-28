const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao');
const con = require('./../../core/db-connection');

class PhotoDao extends BaseDao {
  constructor() {
    super(con.model('photos'));
  }
}

module.exports = new PhotoDao();
