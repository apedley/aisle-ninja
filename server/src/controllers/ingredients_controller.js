var knex = require('../../db/knex');
import * as Utils from '../utils';
import Ingredient from '../models/ingredient';

module.exports = {
  list(req, res) {
    Ingredient.query()
      .then(ingredients => Utils.sendJSON(res, ingredients))
      .catch(error => Utils.sendError(res, error));
  },
  
  show(req, res) {
    Ingredient.query().eager('ingredients').findById(req.params.id)
      .then(ingredient => Utils.sendJSON(res, ingredient))
      .catch(error => Utils.sendError(res, error));
  },
  
  create(req, res) {
    Ingredient.query().insert({
      name: req.body.name,
      description: req.body.description,
      amount: req.body.amount,
    })
      .then(ingredients => Utils.sendJSON(res, ingredients))
      .catch(error => Utils.sendError(res, error)); 
  },
  
  delete(req, res) {
    Ingredient.query().deleteById(req.params.id)
      .then(rowsDeleted => Utils.sendJSON(res, rowsDeleted))
      .catch(error => Utils.sendError(res, error));
  },

  update(req, res) {
    Ingredient.query().updateAndFetchById(req.params.id, req.body)
      .then(recipe => Utils.sendJSON(res, recipe))
      .catch(error => Utils.sendError(res, error)); 
  },

  patch(req, res) {
    Ingredient.query().patchAndFetchById(req.params.id, req.body)
      .then(recipe => Utils.sendJSON(res, recipe))
      .catch(error => Utils.sendError(res, error)); 
  }
}