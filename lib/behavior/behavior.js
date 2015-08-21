var checks = {};

checks.behaviorData = function(behaviorData) {
  if (!_.isBoolean(behaviorData.hasCreatedField)) {
    throw new Error(
      'The "hasCreatedField" option in the "timestamp" behavior has to ' +
      'be a boolean'
    );
  }

  if (!_.isString(behaviorData.createdFieldName)) {
    throw new Error(
      'The "createdFieldName" option in the "timestamp" behavior has to ' +
      'be a string'
    );
  }

  if (!_.isBoolean(behaviorData.hasUpdatedField)) {
    throw new Error(
      'The "hasUpdatedField" option in the "timestamp" behavior has to ' +
      'be a boolean'
    );
  }

  if (!_.isString(behaviorData.updatedFieldName)) {
    throw new Error(
      'The "updatedFieldName" option in the "timestamp" behavior has to ' +
      'be a string'
    );
  }
};

Astro.createBehavior({
  name: 'timestamp',
  options: {
    hasCreatedField: true,
    createdFieldName: 'createdAt',
    hasUpdatedField: true,
    updatedFieldName: 'updatedAt'
  },
  events: {
    addbehavior: function(behaviorData) {
      var Class = this;
      var behavior = Astro.behaviors.timestamp;

      // Set default behavior's options if they were not provided in the schema.
      if (_.isUndefined(behaviorData.hasCreatedField)) {
        behaviorData.hasCreatedField = behavior.options.hasCreatedField;
      }
      if (_.isUndefined(behaviorData.createdFieldName)) {
        behaviorData.createdFieldName = behavior.options.createdFieldName;
      }
      if (_.isUndefined(behaviorData.hasUpdatedField)) {
        behaviorData.hasUpdatedField = behavior.options.hasUpdatedField;
      }
      if (_.isUndefined(behaviorData.updatedFieldName)) {
        behaviorData.updatedFieldName = behavior.options.updatedFieldName;
      }

      // Check validity of options.
      checks.behaviorData.call(Class, behaviorData);

      // Add created field to the class if not disabled.
      if (behaviorData.hasCreatedField) {
        // Get created field name (can be overridden by user).
        var createdFieldName = behaviorData.createdFieldName;

        // Add the field of the "date" type.
        Class.addField(createdFieldName, {
          type: 'date',
          default: null
        });
      }

      // Add updated field to the class if not disabled.
      if (behaviorData.hasUpdatedField) {
        // Get updated field name (can be overridden by user).
        var updatedFieldName = behaviorData.updatedFieldName;

        // Add the field of the "date" type.
        Class.addField(updatedFieldName, {
          type: 'date',
          default: null
        });
      }

      // Add events to the class.
      Class.addEvents(events);
    }
  }
});
