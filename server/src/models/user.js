import { Model } from 'objection';

const Password = require('objection-password')();

export default class User extends Password(Model) {

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        password: { type: 'string' },
        fistName: { type: 'string' },
        lastName: { type: 'string' },
        role: { 
          type: 'string',
          enum: ['Admin', 'User'],
          default: 'User'
        },
        resetPasswordToken: { type: 'string' },
        resetPasswordExpires: { type: 'date' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' }
      }
    }
  }

  static get relationMappings() {
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }


}