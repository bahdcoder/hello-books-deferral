const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'úsers';
  }
}

module.exports = User
