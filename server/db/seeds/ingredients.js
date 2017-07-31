
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'banana', description: 'thing', amount: 2},
        {id: 2, name: 'lime', description: 'green', amount: 1},
        {id: 3, name: 'beef', description: 'brown', amount: 0},
      ]);
    });
};
