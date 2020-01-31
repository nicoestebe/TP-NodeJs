const User = require('../models/user.model.js');

module.exports = class UsersController {

  getAll() {
    return new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (!err) {
          resolve(users.map(user => user.toObject()));
        } else {
          reject(err);
        }
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      User.findById(id, (err, user) => {
        if (!err) {
          resolve(user.toObject());
        } else {
          reject(err);
        }
      });
    });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      User.create(user, (err, createdUser) => {
        if (!err) {
          resolve(createdUser);
        } else {
          reject(err);
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      User.findByIdAndRemove(id, (err) => {
        if (!err) {
          resolve(true);
        } else {
          reject(err);
        }
      });
    });
  }
}
