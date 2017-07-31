import { Model } from 'objection';
import Ingredient from './ingredient';

export default class Recipe extends Model {

  static get tableName() {
    return 'recipes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        description: { type: 'text' },
        instructions: { type: 'text' },
        rating: { type: 'decimal' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' }
      }
    }
  }

  static get relationMappings() {
    return {
      ingredients: {
        relation: Model.ManyToManyRelation,
        modelClass: Ingredient,
        join: {
          from: 'recipes.id',
          through: {
            from: 'recipes_ingredients.recipeId',
            to: 'recipes_ingredients.ingredientId',
            extra: ['amount']
          },
          to: 'ingredients.id'
        }
      }
    }
  }

}