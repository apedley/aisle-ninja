var knex = require('../../db/knex');
import * as Utils from '../utils';
import Recipe from '../models/recipe';

module.exports = {
  list(req, res) {
    Recipe.query()
      .then(recipes => Utils.sendJSON(res, recipes))
      .catch(error => Utils.sendError(res, error));
  },
  
  show(req, res) {
    Recipe.query().eager('ingredients').findById(req.params.id)
      .then(recipe => Utils.sendJSON(res, recipe))
      .catch(error => Utils.sendError(res, error));
  },
  
  create(req, res) {
    Recipe.query().insert({
      name: req.body.name,
      instructions: req.body.instructions,
      description: req.body.description,
      rating: 0.0
    })
      .then(recipes => Utils.sendJSON(res, recipes))
      .catch(error => Utils.sendError(res, error)); 
  },
  
  delete(req, res) {
    Recipe.query().deleteById(req.params.id)
      .then(rowsDeleted => Utils.sendJSON(res, rowsDeleted))
      .catch(error => Utils.sendError(res, error));
  },

  update(req, res) {
    Recipe.query().updateAndFetchById(req.params.id, req.body)
      .then(recipe => Utils.sendJSON(res, recipe))
      .catch(error => Utils.sendError(res, error)); 
  },

  patch(req, res) {
    Recipe.query().patchAndFetchById(req.params.id, req.body)
      .then(recipe => Utils.sendJSON(res, recipe))
      .catch(error => Utils.sendError(res, error)); 
  },
  
  listIngredients(req, res) {
    Recipe.query().eager('ingredients').findById(req.params.id)
      .then(recipe => Utils.sendJSON(res, recipe.ingredients))
      .catch(error => Utils.sendError(res, error));
  },

  addIngredient(req, res) {
    const amount = req.body.amount || 0;
    Recipe.query().where('id', req.params.id).first().then(recipe => {
      return recipe.$relatedQuery('ingredients').relate({
        id: req.body.ingredientId,
        amount: amount
      });
    })
    .then(() => Utils.sendJSON(res, {}, 201))
    .catch(error => Utils.sendError(res, error));
  },

  removeIngredient(req, res) {
    Recipe.query().where('id', req.params.id).first().then(recipe => {
      return recipe.$relatedQuery('ingredients').unrelate().where('id', req.params.ingredientId);
    })
    .then(() => Utils.sendJSON(res, {}, 200))
    .catch(error => Utils.sendError(res, error));
  }
}