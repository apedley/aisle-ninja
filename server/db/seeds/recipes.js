
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'hamburger', description: 'a burger', instructions: 'make it', rating: 0.5},
        {id: 2, name: 'salad', description: 'nope no', instructions: 'ok hi', rating: 0.5},
        {id: 3, name: 'hot dog', description: 'no ketchup', instructions: 'do thing', rating: 0.5},
      ]);
    });
};
