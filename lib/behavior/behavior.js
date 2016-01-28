Astro.Behavior.create({
  name: 'timestamp',
  methods: {
    setCreationDate: function(doc) {
      let Class = doc.constructor;

      // Find a class on which the behavior had been set.
      let classBehavior = Class.getBehavior('timestamp');
      let options = classBehavior.options;

      // Get current date.
      let date = new Date();

      // If the "hasCreatedField" option is set.
      if (options.hasCreatedField) {
        // Set value for created field.
        doc[options.createdFieldName] = date;
      }

      if (options.hasUpdatedField) {
        // Set value for the "updatedAt" field.
        doc[options.updatedFieldName] = date;
      }
    },
    setModificationDate: function(doc) {
      let Class = doc.constructor;

      // Find a class on which the behavior had been set.
      let classBehavior = Class.getBehavior('timestamp');
      let options = classBehavior.options;

      // Get current date.
      let date = new Date();

      // If the "hasUpdatedField" option is set.
      if (options.hasUpdatedField) {
        // Set value for the "updatedAt" field.
        doc[options.updatedFieldName] = date;
      }
    }
  },
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
        type: Date,
        immutable: true,
        default: null
      };
    }

    if (options.hasUpdatedField) {
      // Add a field for storing an update date.
      schemaDefinition.fields[options.updatedFieldName] = {
        type: Date,
        optional: true,
        default: null
      };
    }

    return schemaDefinition;
  }
});
