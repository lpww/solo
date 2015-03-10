var app = {
  left: {
    deck: document.getElementById('leftDeck'),
    rate: document.getElementById('leftRate'),
    currentRate: document.getElementById('currentLeftRate'),
    form: document.getElementById('leftForm'),
    eq: {
      high: document.getElementById('leftHigh'),
      mid: document.getElementById('leftMid'),
      low: document.getElementById('leftLow')
    }
  },
  right: {
    deck: document.getElementById('rightDeck'),
    rate: document.getElementById('rightRate'),
    currentRate: document.getElementById('currentRightRate'),
    form: document.getElementById('rightForm'),
    eq: {
      high: document.getElementById('rightHigh'),
      mid: document.getElementById('rightMid'),
      low: document.getElementById('rightLow')
    }
  },
  fader: document.getElementById('fader')
};

var emptySearch = function(context) {
  if(context.value === 'Paste a YouTube link here!') {
    context.value = '';
  }
};

var loadListeners = function(deck) {
  var left = app.left;
  var right = app.right;

  //Pitch fader listeners

  left.rate.addEventListener('input', function() {
    left.currentRate.innerHTML = left.rate.value;
    left.deck.playbackRate = left.rate.value;
  }, false);

  right.rate.addEventListener('input', function() {
    right.currentRate.innerHTML = right.rate.value;
    right.deck.playbackRate = right.rate.value;
  }, false);

  //Cross fader listener

  app.fader.addEventListener('input', function() {
    var x = app.fader.value / app.fader.max;
    // Use an equal-power crossfading curve:
    var gain1 = Math.cos(x * 0.5*Math.PI);
    var gain2 = Math.cos((1.0 - x) * 0.5*Math.PI);
    left.source.gainNode.gain.value = gain1;
    right.source.gainNode.gain.value = gain2;
  }, false);

  //Song select listeners

  left.form.addEventListener("submit", function(e) {
    var form = document.getElementById('leftForm');
    var input = document.querySelector('#leftQueue');
    convert(app.left.deck, input.value);
    form.reset();
  }, false); 

  right.form.addEventListener("submit", function() {
    var form = document.getElementById('rightForm');
    var input = document.querySelector('#rightQueue');
    convert(app.right.deck, input.value);
    form.reset();
  }, false); 

  //EQ listeners left
  left.eq.high.addEventListener('input', function() {
    var input = document.querySelector('#leftHigh');
    left.source.highFilter.gain.value = input.value-40;
  });
  left.eq.mid.addEventListener('input', function() {
    var input = document.querySelector('#leftMid');
    left.source.midFilter.gain.value = input.value-40;
  });
  left.eq.low.addEventListener('input', function() {
    var input = document.querySelector('#leftLow');
    left.source.lowFilter.gain.value = input.value-40;
    console.log(left.source.lowFilter.gain.value);
  });

  //eq listners right
  right.eq.high.addEventListener('input', function() {
    var input = document.querySelector('#rightHigh');
    right.source.highFilter.gain.value = input.value-40;
  });
  right.eq.mid.addEventListener('input', function() {
    var input = document.querySelector('#rightMid');
    right.source.midFilter.gain.value = input.value-40;
  });
  right.eq.low.addEventListener('input', function() {
    var input = document.querySelector('#rightLow');
    right.source.lowFilter.gain.value = input.value-40;
    console.log(right.source.lowFilter.gain.value);
  });
};

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

window.onload = function () {
  loadListeners();
};