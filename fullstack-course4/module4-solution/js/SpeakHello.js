(function () {
  var speakWord = "Hello";
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    li = document.createElement("li");
    li.innerText = speakWord + " " + name;
    list.appendChild(li);
  };
  window.helloSpeaker = helloSpeaker;
})();
