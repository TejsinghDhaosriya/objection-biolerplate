
// User Model 

const { Model } = require('objection');

class UserAuth extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'user';
  }



  static get relationMappings(){
    return {

    }
  }

}

module.exports = UserAuth;