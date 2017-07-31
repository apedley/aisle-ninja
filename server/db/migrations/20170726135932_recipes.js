
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table){
    table.increments();
    table.string('name').notNullable();
    table.text('description');
    table.text('instructions');
    table.decimal('rating');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
