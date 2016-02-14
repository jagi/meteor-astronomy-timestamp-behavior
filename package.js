Package.describe({
  summary: 'Timestamp behavior for Meteor Astronomy',
  version: '2.0.0-rc.2',
  name: 'jagi:astronomy-timestamp-behavior',
  git: 'https://github.com/jagi/meteor-astronomy-timestamp-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('jagi:astronomy@2.0.0-rc.4');
  api.use('underscore');
  api.use('ecmascript');
  api.use('es5-shim');

  api.imply('jagi:astronomy');

  // Behavior.
  api.addFiles('lib/behavior/behavior.js', ['client', 'server']);
});
