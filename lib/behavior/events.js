events = {};

events.beforeInsert = function timestampBeforeInsert(e) {
  var doc = e.currentTarget;
  var Class = doc.constructor;
  Class.getBehavior('timestamp').setCreationDate(doc);
};

events.beforeUpdate = function timestampBeforeUpdate(e) {
  var doc = e.currentTarget;
  var Class = doc.constructor;
  Class.getBehavior('timestamp').setModificationDate(doc);
};
