var convert = function(deck, src) {
  var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
  if (isYoutube) {
    console.log(isYoutube);
      var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
      id = (id.length > 1) ? id.splice(1) : id;
      id = id.toString();
      var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
      deck.src = mp4url + id;
  }
};