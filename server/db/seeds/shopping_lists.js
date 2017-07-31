
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_lists').insert([
        {id: 1, name: 'first list', notes: 'none'},
        {id: 2, name: 'second list', notes: 'nope no'},
      ]);
    })
    .then(function() {
      return knex('shopping_list_items').del()
        .then(function() {
          return knex('shopping_list_items').insert([
            {id: 1, completed: false, shoppingListId: 1, ingredientId: 1},
            {id: 2, completed: true, shoppingListId: 1, ingredientId: 2},
          ]);
        });
    });
};
