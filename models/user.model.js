const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'brukernavn er obligatorisk'],
    unique: true,
  },
  password: { type: String, required: [true, 'passord er obligatorisk'] },
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
