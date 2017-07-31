import { Model } from 'objection';
import ShoppingListItem from './shopping_list_item';

export default class ShoppingList extends Model {
  static get tableName() {
    return 'shopping_lists';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        notes: { type: 'text'},
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' }
      }
    }
  }
  static get relationMappings() {
    return {
      shoppingListItems: {
        relation: Model.HasManyRelation,
        modelClass: ShoppingListItem,
        join: {
          from: 'shopping_lists.id',
          to: 'shopping_list_items.shoppingListId'
        }
      }
    }
  }
}