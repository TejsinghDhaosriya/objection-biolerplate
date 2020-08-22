
// User Model 

const { Model } = require('objection');

class Post extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'post';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        fullName : { type : "string" },
        dob : { type : "date"}
      }
    };
  }


  static get relationMappings(){
    return {

    }
  }

}

module.exports = Post;