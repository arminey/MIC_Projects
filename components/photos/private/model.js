const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const AppConstants = require('./../../../settings/constants');

let PhotosSchema = Schema({
  image: {
    type: Buffer,
    index: {unique: true}
  },
  content_type: {
    type: String
  },
  size: {
    type:Number
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  },
});

module.exports = mongoose.model('photos', PhotosSchema);
