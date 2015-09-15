Astro.createBehavior({
  name: 'timestamp',
  options: {
    hasCreatedField: true,
    createdFieldName: 'createdAt',
    hasUpdatedField: true,
    updatedFieldName: 'updatedAt'
  },
  createSchemaDefinition: function(options) {
    var schemaDefinition = {
      fields: {},
      events: events
    };

    if (options.hasCreatedField) {
      // Add a field for storing a creation date.
      schemaDefinition.fields[options.createdFieldName] = {
        type: 'date',
        immutable: true,
        default: null
      };
    }

    if (options.hasUpdatedField) {
      // Add a field for storing an update date.
      schemaDefinition.fields[options.updatedFieldName] = {
        type: 'date',
        optional: true,
        default: null
      };
    }

    return schemaDefinition;
  }
});
