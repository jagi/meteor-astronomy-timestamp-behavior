events = {};

events.beforeInsert = function() {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.findBehavior(this.constructor, 'timestamp');

  // If "hasCreatedField" option is set.
  if (behaviorData.hasCreatedField) {
    // Set value for created field.
    this.set(behaviorData.createdFieldName, new Date());
  }
};

events.beforeUpdate = function() {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.findBehavior(this.constructor, 'timestamp');

  // If "hasUpdatedField" option is set.
  if (behaviorData.hasUpdatedField) {
    // Set value for updated field.
    this.set(behaviorData.updatedFieldName, new Date());
  }
};
