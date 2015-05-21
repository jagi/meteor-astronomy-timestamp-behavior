# Timestamp behavior for Meteor Astronomy

The `timestamp` behavior adds two fields that store information about document's creation and update dates.

```js
Post.addBehavior('timestamp', {
  hasCreatedField: true,
  createdFieldName: 'createdAt',
  hasUpdatedField: true,
  updatedFieldName: 'updatedAt'
});

var post = new Post();
post.save();

console.log(post.createdAt); // Prints out document's creation date.

/* ... */

post.save();
console.log(post.updatedAt); // Prints out document's update date.
```
