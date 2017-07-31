import { Model } from 'objection';
import ShoppingList from './shopping_list';
import Ingredient from './ingredient';

export default class ShoppingListItem extends Model {
  static get tableName() {
    return 'shopping_list_items';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        completed: { type: 'boolean' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' }
      }
    }
  }
  static get relationMappings() {
    return {
      shoppingList: {
        relation: Model.BelongsToOneRelation,
        modelClass: ShoppingList,
        join: {
          from: 'shopping_list_items.shoppingListId',
          to: 'shopping_lists.id'
        }
      },
      ingredient: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: 'shopping_list_items.shoppingListId',
          to: 'ingredients.id'
        }
      }
    }
  }
}