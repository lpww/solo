app.context = new (window.AudioContext || window.webkitAudioContext)();

var createSource = function(element) {
  var source = app.context.createMediaElementSource(element);

  var gainNode = app.context.createGain();
  var lowFilter = app.context.createBiquadFilter();
  // var lowGain = app.context.createGain()
  var midFilter = app.context.createBiquadFilter();
  var highFilter = app.context.createBiquadFilter();

  source.connect(lowFilter);
  lowFilter.connect(midFilter);
  midFilter.connect(highFilter);
  highFilter.connect(gainNode);
  gainNode.connect(app.context.destination);
  
  lowFilter.type = 'lowshelf';
  midFilter.type = 'peaking';
  highFilter.type = 'highshelf';
  lowFilter.frequency.value = 420;
  midFilter.frequency.value = 1200;
  highFilter.frequency.value = 2700;

  return {
    source: source,
    gainNode: gainNode,
    lowFilter: lowFilter,
    midFilter: midFilter,
    highFilter: highFilter
  };
}

var equalize = function(deck, filter) {

} 

app.right.source = createSource(app.right.deck);
app.left.source = createSource(app.left.deck);
// var left = document.querySelector('#rightDeck');
// var myAudio = document.querySelector('#rightDeck');
// var pre = document.querySelector('pre');
// var myScript = document.querySelector('script');

// pre.innerHTML = myScript.innerHTML;

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
// var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
// var gainNode = audioCtx.createGain();

// Create variables to store mouse pointer Y coordinate
// and HEIGHT of screen
// var CurY;
// var HEIGHT = window.innerHeight;

// // Get new mouse pointer coordinates when mouse is moved
// // then set new gain value

// document.onmousemove = updatePage;

// function updatePage(e) {
//     CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

//     gainNode.gain.value = CurY/HEIGHT;
// }


// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the volume using the mouse cursor
// source.connect(gainNode);
// gainNode.connect(audioCtx.destination);