var test = require("tape");
var timeago = require("./");

var msg_now = "less than a minute ago";
var msg_badinput = "???";

test("falsy inputs", function(t){
  t.equal(timeago(), msg_now);
  t.equal(timeago(new Date()), msg_now);

  [
    false,
    null,
    undefined,
    "",
    0
  ].forEach(function(input){
    t.equal(timeago(input), msg_now);
    t.equal(timeago(new Date(), input), msg_now);
  });

  t.end();
});

test("truthy but not a Date object", function(t){
  [
    true,
    1,
    (new Date()).getTime(),
    (new Date()).toISOString()
  ].forEach(function(input){
    t.equal(timeago(input), msg_badinput);
    t.equal(timeago(new Date(), input), msg_badinput);
  });

  t.end();
});
