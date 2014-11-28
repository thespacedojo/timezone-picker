Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection."
  version: '0.1.0',
  name: "joshowens:timezone-picker",
  git: 'https://github.com/MeteorClub/timezone-picker'
});

Package.onUse(function(api, where) {
  api.use(['blaze', 'templating', 'jquery'], 'client');
  api.use(['underscore'], 'client');
  api.use(['mrt:moment', 'mrt:moment-timezone'], 'client');

  api.addFiles([
    'mapping.js',
    'picker.html',
    'picker.js',
    'jstz.js'
  ], 'client');

  api.export(['TimezonePicker']);
});


