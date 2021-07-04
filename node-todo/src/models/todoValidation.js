import Ajv from 'ajv';
const ajv = new Ajv();
import range from 'ajv-keywords';

range(ajv);

const todoSchemaValidation = {
  type: 'object',
  properties: {
    text: { type: 'string', regexp: '/^[a-zA-Z ]*$/' },
    priority: { type: 'integer', range: [1, 5], nullable: true },
    done: { type: 'boolean', nullable: true },
  },
  additionalProperties: false,
  required: ['text'],
};
const todoSchemaUpdateValidation = {
  type: 'object',
  properties: {
    text: { type: 'string', nullable: true, regexp: '/^[a-zA-Z ]*$/' },
    priority: { type: 'integer', range: [1, 5], nullable: true },
    done: { type: 'boolean', nullable: true },
  },
  additionalProperties: false,
  required: ['text'],
};

export const isTodoValid = ajv.compile(todoSchemaValidation);
export const isUpdateTodoValid = ajv.compile(todoSchemaUpdateValidation);
