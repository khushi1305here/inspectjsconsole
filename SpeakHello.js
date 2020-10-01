(function (window) {
var helloSpeaker = {};

var speakWord = "Hello";

helloSpeaker.speak = function (firstname,lastname) {
  var fullname;
  fullname=firstname+lastname;
  console.log(speakWord + " " + fullname);
  console.log("welcome to the world of javascript "+fullname);
v
}
window.helloSpeaker = helloSpeaker;

})(window);
