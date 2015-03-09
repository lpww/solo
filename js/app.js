var app = {
  left: {
    deck: document.getElementById("leftDeck"),
    rate: document.getElementById("leftRate"),
    currentRate: document.getElementById("currentLeftRate")
  },
  right: {
    deck: document.getElementById("rightDeck"),
    rate: document.getElementById("rightRate"),
    currentRate: document.getElementById("currentRightRate")
  }
};

var loadListeners = function() {
  var left = app.left;
  left.rate.addEventListener('input',function(){
    left.currentRate.innerHTML = left.rate.value;
    left.deck.playbackRate = left.rate.value;
  },false);

  var right = app.right;
  right.rate.addEventListener('input',function(){
    right.currentRate.innerHTML = right.rate.value;
    right.deck.playbackRate = right.rate.value;
  },false);
}
window.onload = function () {
  loadListeners();
};

window.
videos = document.querySelectorAll("video");
for (var i = 0, l = videos.length; i < l; i++) {
    var video = videos[i];
    var src = video.src || (function () {
        var sources = video.querySelectorAll("source");
        for (var j = 0, sl = sources.length; j < sl; j++) {
            var source = sources[j];
            var type = source.type;
            var isMp4 = type.indexOf("mp4") != -1;
            if (isMp4) return source.src;
        }
        return null;
    })();
    if (src) {
        var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
        if (isYoutube) {
            var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
            id = (id.length > 1) ? id.splice(1) : id;
            id = id.toString();
            var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
            video.src = mp4url + id;
        }
    }
}