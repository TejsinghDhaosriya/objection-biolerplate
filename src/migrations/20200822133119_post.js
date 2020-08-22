
exports.up = function(knex) {
   return knex.schema.createTable("post",function(table){
        table.increments("id");
        table.string("postName");
        table.string("postDescription");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("post");
};
