


(function (window) {

var names = ["John", "Jen","Jimmy","Randall", "Larry","Cook"] 

for (var i = 0; i < names.length; i++) {

 
  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter == 'j') {
    window.byeSpeaker.speak(names[i]);
  } else {
    window.helloSpeaker.speak(names[i]);
  }
}

})(window);
