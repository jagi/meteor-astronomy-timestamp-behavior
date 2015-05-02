Astronomy.Behavior({
  name: 'timestamp',
  aliases: ['Timestamp', 'time', 'timestampable'],
  options: {
    hasCreatedField: true,
    createdFieldName: 'createdAt',
    hasUpdatedField: true,
    updatedFieldName: 'updatedAt'
  },
  init: function(behaviorData) {
    // Update behavior options with options defined by user in the class schema.
    if (_.has(behaviorData, 'hasCreatedField')) {
      if (!_.isBoolean(behaviorData.hasCreatedField)) {
        throw new Error(
          'The "hasCreatedField" option in the "timestamp" behavior has to ' +
          'be a boolean'
        );
      }

      this.options.hasCreatedField = behaviorData.hasCreatedField;
    }

    if (_.has(behaviorData, 'createdFieldName')) {
      if (!_.isString(behaviorData.createdFieldName)) {
        throw new Error(
          'The "createdFieldName" option in the "timestamp" behavior has to ' +
          'be a string'
        );
      }

      this.options.createdFieldName = behaviorData.createdFieldName;
    }

    if (_.has(behaviorData, 'hasUpdatedField')) {
      if (!_.isBoolean(behaviorData.hasUpdatedField)) {
        throw new Error(
          'The "hasCreatedField" option in the "timestamp" behavior has to ' +
          'be a boolean'
        );
      }

      this.options.hasUpdatedField = behaviorData.hasUpdatedField;
    }

    if (_.has(behaviorData, 'updatedFieldName')) {
      if (!_.isString(behaviorData.updatedFieldName)) {
        throw new Error(
          'The "updatedFieldName" option in the "timestamp" behavior has to ' +
          'be a string'
        );
      }

      this.options.updatedFieldName = behaviorData.updatedFieldName;
    }
  },
  initSchema: function(schema) {
    // Add created field to schema if not disabled.
    if (this.options.hasCreatedField) {

      // Get created field name (can be overridden by user).
      var createdFieldName = this.options.createdFieldName;

      // Add field of "date" type.
      schema.addField(createdFieldName, {
        type: 'date',
        default: null
      });

    }

    // Add updated field to schema if not disabled.
    if (this.options.hasUpdatedField) {

      // Get updated field name (can be overridden by user).
      var updatedFieldName = this.options.updatedFieldName;

      // Add field of "date" type.
      schema.addField(updatedFieldName, {
        type: 'date',
        default: null
      });

    }

    // Add events to schema.
    schema.addEvents(events);
  }
});
