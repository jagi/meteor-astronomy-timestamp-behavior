events = {};

events.beforeInsert = function() {
  // Find a class on which the behavior had been set.
  var behavior = Astro.Utils.findBehavior(this.constructor, 'timestamp');

  // If "hasCreatedField" option is set.
  if (behavior.options.hasCreatedField) {
    // Set value for created field.
    this.set(behavior.options.createdFieldName, new Date());
  }
};

events.beforeUpdate = function() {
  // Find a class on which the behavior had been set.
  var behavior = Astro.Utils.findBehavior(this.constructor, 'timestamp');

  // If "hasUpdatedField" option is set.
  if (behavior.options.hasUpdatedField) {
    // Set value for updated field.
    this.set(behavior.options.updatedFieldName, new Date());
  }
};
