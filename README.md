# Timezone Picker

A meteor.js package that allows you to detect client-side timezones and gives you an interface for changing those timezones from user inputs.

## Getting started

### Install

Just run

```
meteor add joshowens:timezone-picker
```

### Add the timezone picker calls

Now we just have to add a startup block on the client to detect timezones:

```
// set the user's timezone
Deps.autorun(function() {
  if (!Meteor.user().profile.timezone) {
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.timezone': TimezonePicker.detectedZone()
    }});
  }
});
```

Then we can add a quick form field to a profile settings form:

```
{{> timezonePicker class="form-group" selected=timezone}}
```

This will inject a select element with all the available moment-timezone timezones as options.
If the user's profile is the context for this template, it should pick up the timezone string we set on loading the page.
