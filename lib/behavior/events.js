events = {};

events.beforeinsert = function() {
  // Get class schema.
  var schemas = this.constructor.schemas;
  // Get "timestamp" behavior from schema.
  var schema = _.find(schemas, function(schema) {
    return schema.hasBehavior('timestamp');
  });
  var behavior = schema.getBehavior('timestamp');

  // If "hasCreatedField" option is set.
  if (behavior.options.hasCreatedField) {
    // Set value for created field.
    this.set(behavior.options.createdFieldName, new Date());
  }
};

events.beforeupdate = function() {
  // Get class schema.
  var schemas = this.constructor.schemas;
  // Get "timestamp" behavior from schema.
  var schema = _.find(schemas, function(schema) {
    return schema.hasBehavior('timestamp');
  });
  var behavior = schema.getBehavior('timestamp');

  // If "hasUpdatedField" option is set.
  if (behavior.options.hasUpdatedField) {
    // Set value for updated field.
    this.set(behavior.options.updatedFieldName, new Date());
  }
};
