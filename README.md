This behavior adds to fields to the schema `createdAt` and `updatedAt`. Those fields will be automatically filled with the current date on document insertion and update.

```js
var post = new Post();
post.save();
console.log(post.createdAt); // Prints out date of document saving
```
