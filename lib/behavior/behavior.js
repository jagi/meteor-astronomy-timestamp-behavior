Astro.createBehavior({
  name: 'timestamp',
  options: {
    hasCreatedField: true,
    createdFieldName: 'createdAt',
    hasUpdatedField: true,
    updatedFieldName: 'updatedAt'
  },
  events: events
});
