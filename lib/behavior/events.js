events = {};

events.beforeInsert = function() {
  var doc = this;
  var Class = doc.constructor;

  // Find a class on which the behavior had been set.
  var behaviorData = Class.getBehavior('timestamp');

  // Get current date.
  var date = new Date();

  // If the "hasCreatedField" option is set.
  if (behaviorData.hasCreatedField) {
    // Set value for created field.
    this.set(behaviorData.createdFieldName, date);
  }

  if (behaviorData.hasUpdatedField) {
    // Set value for the "updatedAt" field.
    this.set(behaviorData.updatedFieldName, date);
  }
};

events.beforeUpdate = function() {
  var doc = this;
  var Class = doc.constructor;

  // Find a class on which the behavior had been set.
  var behaviorData = Class.getBehavior('timestamp');

  // If the "hasUpdatedField" option is set.
  if (behaviorData.hasUpdatedField) {
    // We only set the "updatedAt" field if there are any changes.
    if (_.size(this.getModified())) {
      // Set value for the "updatedAt" field.
      this.set(behaviorData.updatedFieldName, new Date());
    }
  }
};
