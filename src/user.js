class User {
  /** get the current user that is using YNAB
   * 
   * @return {Request}
   **/
  static get() {
    return {method: 'get', url: '/user'};
  }

  static fromResponse(res) {
    return new User(res.data.user.id);
  }

  constructor(userId) {
    this.id = userId;
  }
}

module.exports = User;

