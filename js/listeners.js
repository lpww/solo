app.loadListeners = function(deck) {
  var left = app.left;
  var right = app.right;

  //Pitch fader listeners
  left.rate.addEventListener('input', function() {
    left.deck.playbackRate = left.rate.value;
  }, false);

  right.rate.addEventListener('input', function() {
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

  //Song select form listeners
  left.form.addEventListener('click', function() {
    var input = document.querySelector('#leftQueue');
    if(input.value === 'Paste a YouTube link here!') {
      input.value = '';
    }
  }, false);

  right.form.addEventListener('click', function() {
    var input = document.querySelector('#rightQueue');
    if(input.value === 'Paste a YouTube link here!') {
      input.value = '';
    }
  }, false);

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
  left.eq.highmid.addEventListener('input', function() {
    var input = document.querySelector('#leftHighMid');
    left.source.highmidFilter.gain.value = input.value-40;
  });
    left.eq.lowmid.addEventListener('input', function() {
    var input = document.querySelector('#leftLowMid');
    left.source.lowmidFilter.gain.value = input.value-40;
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
  right.eq.highmid.addEventListener('input', function() {
    var input = document.querySelector('#rightHighMid');
    right.source.highmidFilter.gain.value = input.value-40;
  });
    right.eq.lowmid.addEventListener('input', function() {
    var input = document.querySelector('#rightLowMid');
    right.source.lowmidFilter.gain.value = input.value-40;
  });
  right.eq.low.addEventListener('input', function() {
    var input = document.querySelector('#rightLow');
    right.source.lowFilter.gain.value = input.value-40;
    console.log(right.source.lowFilter.gain.value);
  });
};