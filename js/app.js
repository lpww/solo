var app = {
  left: {
    deck: document.getElementById('leftDeck'),
    rate: document.getElementById('leftRate'),
    currentRate: document.getElementById('currentLeftRate'),
    form: document.getElementById('leftForm'),
    eq: {
      high: document.getElementById('leftHigh'),
      highmid: document.getElementById('leftHighMid'),
      lowmid: document.getElementById('leftLowMid'),
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
      highmid: document.getElementById('rightHighMid'),
      lowmid: document.getElementById('rightLowMid'),
      low: document.getElementById('rightLow')
    }
  },
  fader: document.getElementById('fader')
};

app.emptySearch = function(context) {
  if(context.value === 'Paste a YouTube link here!') {
    context.value = '';
  }
};

window.onload = function () {
  app.loadListeners();
};