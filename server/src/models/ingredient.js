import { Model } from 'objection';
import Recipe from './recipe';

export default class Ingredient extends Model {

  static get tableName() {
    return 'ingredients';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'name'],
      properties: {
        description: { type: 'text' },
        amount: { type: 'integer' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' }
      }
    }
  }

  static get relationMappings() {
    return {
      recipes: {
        relation: Model.ManyToManyRelation,
        modelClass: Recipe,
        join: {
          from: 'ingredients.id',
          through: {
            from: 'recipes_ingredients.ingredientId',
            to: 'recipes_ingredients.recipeId',
            extra: ['amount']
          },
          to: 'recipes.id'
        }
      }
    }
  }

}