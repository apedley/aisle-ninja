
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table){
    table.increments();
    table.string('name').notNullable();
    table.text('description');
    table.integer('amount');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
