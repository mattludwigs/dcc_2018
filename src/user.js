const client = require('./client');

class User {
  /** get the current user that is using YNAB
   * 
   * @return {User}
   **/
  static get() {
    return client.http.get('/user')
      .then(res => {
        const userId = res.data.data.user.id;
        return new User(userId);
      })
  }

  constructor(userId) {
    this.id = userId;
  }
}

module.exports = User;

