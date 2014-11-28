TimezonePicker;

TimezonePicker = {
  detectedZone: function() {
    var tz = jstz.determine();
    return tz.name();
  },
  mapping: function() {
    return _.map(moment.tz.names(), function(name) {
      var prettyName = name.replace("_", " ");
      var offset = moment.tz(name)._offset / 60 * -1;

      var sign = offset < 0 ? "-" : "";
      var min = Math.floor(Math.abs(offset));
      var sec = Math.floor((Math.abs(offset) * 60) % 60);
      var gmtOffset = sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;

      return {name: prettyName, timezone: name, gmtOffset: gmtOffset};
    });
  },
  from: function(value) {
    return this.mapping[value];
  },
  to: function(value) {
    for (var key in this.mapping) {
      if (this.mapping[key] === value) return key;
    }
  }
};
