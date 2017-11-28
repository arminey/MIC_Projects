const UserDAO = require('./private/dao');

class UsersService {

  getUsers() {
    return new Promise((resolve, reject) => {
      UserDAO.getData().then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }

  insertUsers(user) {
    return new Promise((resolve, reject) => {
      UserDAO.insertData({
        fullname: user.fullname,
        username: user.username,
        password: user.password,
        email: user.email,
        birthday: user.birthday
      }).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }
}




module.exports = new UsersService();
