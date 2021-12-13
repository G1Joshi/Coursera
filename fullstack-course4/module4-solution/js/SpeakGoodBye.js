(function () {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    li = document.createElement("li");
    li.innerText = speakWord + " " + name;
    list.appendChild(li);
  };
  window.byeSpeaker = byeSpeaker;
})();
