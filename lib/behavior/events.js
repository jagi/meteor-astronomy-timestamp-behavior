events = {};

events.beforeInsert = function() {
  // Get class schema.
  var schema = this.constructor.schema;
  // Get "timestamp" behavior from given schema.
  var behavior = schema.getBehavior('timestamp');

  // If "hasCreatedField" option is set.
  if (behavior.options.hasCreatedField) {
    // Set value for created field.
    this.set(behavior.options.createdFieldName, new Date());
  }
};

events.beforeUpdate = function() {
  // Get class schema.
  var schema = this.constructor.schema;
  // Get "timestamp" behavior from given schema.
  var behavior = schema.getBehavior('timestamp');

  // If "hasUpdatedField" option is set.
  if (behavior.options.hasUpdatedField) {
    // Set value for updated field.
    this.set(behavior.options.updatedFieldName, new Date());
  }
};
