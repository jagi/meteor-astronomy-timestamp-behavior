events = {};

events.beforeInsert = function() {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.findBehavior(this.constructor, 'timestamp');

  // If the "hasCreatedField" option is set.
  if (behaviorData.hasCreatedField) {
    // Set value for created field.
    this.set(behaviorData.createdFieldName, new Date());
  }
};

events.beforeUpdate = function() {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.findBehavior(this.constructor, 'timestamp');

  // If the "hasUpdatedField" option is set.
  if (behaviorData.hasUpdatedField) {
    // We only set the "updatedAt" field if there are any changes.
    if (_.size(this.getModified())) {
      // Set value for the "updatedAt" field.
      this.set(behaviorData.updatedFieldName, new Date());
    }
  }
};
