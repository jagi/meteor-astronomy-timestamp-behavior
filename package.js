Package.describe({
  name: 'jagi:astronomy-timestamp-behavior',
  version: '2.0.0',
  summary: 'Timestamp behavior for Meteor Astronomy',
  git: 'https://github.com/jagi/meteor-astronomy-timestamp-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'es5-shim',
    'jagi:astronomy@2.0.0'
  ], ['client', 'server']);

  api.mainModule('lib/main.js', ['client', 'server']);
});