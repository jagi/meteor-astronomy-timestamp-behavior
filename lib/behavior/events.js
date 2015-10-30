events = {};

events.beforeInsert = function() {
  var doc = this;
  var Class = doc.constructor;
  Class.getBehavior('timestamp').setCreationDate(doc);
};

events.beforeUpdate = function() {
  var doc = this;
  var Class = doc.constructor;
  Class.getBehavior('timestamp').setModificationDate(doc);
};
