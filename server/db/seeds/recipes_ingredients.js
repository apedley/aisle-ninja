
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipeId: 1, ingredientId: 1, amount: 1},
        {recipeId: 1, ingredientId: 2, amount: 5},
        {recipeId: 3, ingredientId: 1, amount: 12}
      ]);
    });
};
