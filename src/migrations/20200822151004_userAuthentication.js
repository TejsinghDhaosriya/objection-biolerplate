
exports.up = function(knex) {
    return knex.schema.createTable("user",function(table){
        table.increments("id");
        table.string("username",).notNullable();
        table.date("dob");
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.json("address");
        table.string("bio",500);
        table.string("mobileNo",10).nullable();
});}

exports.down = function(knex) {
  
};
