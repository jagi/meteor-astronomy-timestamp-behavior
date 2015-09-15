events = {};

events.beforeInsert = function() {
  var doc = this;
  var Class = doc.constructor;

  // Find a class on which the behavior had been set.
  var classBehavior = Class.getBehavior('timestamp');
  var options = classBehavior.options;

  // Get current date.
  var date = new Date();

  // If the "hasCreatedField" option is set.
  if (options.hasCreatedField) {
    // Set value for created field.
    this.set(options.createdFieldName, date);
  }

  if (options.hasUpdatedField) {
    // Set value for the "updatedAt" field.
    this.set(options.updatedFieldName, date);
  }
};

events.beforeUpdate = function() {
  var doc = this;
  var Class = doc.constructor;

  // Find a class on which the behavior had been set.
  var classBehavior = Class.getBehavior('timestamp');
  var options = classBehavior.options;

  // If the "hasUpdatedField" option is set.
  if (options.hasUpdatedField) {
    // We only set the "updatedAt" field if there are any changes.
    if (_.size(this.getModified())) {
      // Set value for the "updatedAt" field.
      this.set(options.updatedFieldName, new Date());
    }
  }
};
