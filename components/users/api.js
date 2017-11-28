const express = require('express');
const UsersRouter = express.Router();
const UsersService = require('./service');

UsersRouter.get('/', (req, res) => {
    UsersService.getUsers().then(data => {
      return res.send(data);
    });

});
UsersRouter.post('/', (req, res) => {
    let user = {
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      birthday: req.body.birthday
    }
    UsersService.insertUsers(user).then(data => {
      return res.send(data);
    });

});
module.exports = UsersRouter;
