Astro.createBehavior({
  name: 'timestamp',
  methods: {
    setCreationDate: function(doc) {
      var Class = doc.constructor;

      // Find a class on which the behavior had been set.
      var classBehavior = Class.getBehavior('timestamp');
      var options = classBehavior.options;

      // Get current date.
      var date = new Date();

      // If the "hasCreatedField" option is set.
      if (options.hasCreatedField) {
        // Set value for created field.
        doc.set(options.createdFieldName, date);
      }

      if (options.hasUpdatedField) {
        // Set value for the "updatedAt" field.
        doc.set(options.updatedFieldName, date);
      }
    },
    setModificationDate: function(doc) {
      var Class = doc.constructor;

      // Find a class on which the behavior had been set.
      var classBehavior = Class.getBehavior('timestamp');
      var options = classBehavior.options;

      // If the "hasUpdatedField" option is set.
      if (options.hasUpdatedField) {
        // We only set the "updatedAt" field if there are any changes.
        if (_.size(doc.getModified())) {
          // Set value for the "updatedAt" field.
          doc.set(options.updatedFieldName, new Date());
        }
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
