var isDate = require("lodash.isdate");
var timeago = require("simple-timeago");

module.exports = function(since, until){
  if((since && !isDate(since)) || (until && !isDate(until))){
    return "???";
  }
  return timeago(since || null, until || null);
};
