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
    // let new_user;

    return new Promise((resolve, reject) => {
      UserDAO.insertData({ username:user.username,
                          password:user.password,
                          email:user.email,
                          name:user.name,
                          birthday:user.birthday
                         }).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }
  }




module.exports = new UsersService();
