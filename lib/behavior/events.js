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

var checkBehaviorData = function(behaviorData) {
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

events.addBehavior = function(behaviorData) {
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
  checkBehaviorData.call(Class, behaviorData);

  // Add created field to the class if not disabled.
  if (behaviorData.hasCreatedField) {
    // Get created field name (can be overridden by user).
    var createdFieldName = behaviorData.createdFieldName;

    // Add the field of the "date" type.
    Class.addField(createdFieldName, {
      type: 'date',
      immutable: true,
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
      optional: true,
      default: null
    });
  }
};
