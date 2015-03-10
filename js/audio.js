var createSource = function(element) {
  var source = app.context.createMediaElementSource(element);

  var gainNode = app.context.createGain();
  var lowFilter = app.context.createBiquadFilter();
  var lowmidFilter = app.context.createBiquadFilter();
  var highmidFilter = app.context.createBiquadFilter();
  var highFilter = app.context.createBiquadFilter();

  source.connect(lowFilter);
  lowFilter.connect(lowmidFilter);
  lowmidFilter.connect(highmidFilter);
  highmidFilter.connect(highFilter);
  highFilter.connect(gainNode);
  gainNode.connect(app.context.destination);
  
  lowFilter.type = 'lowshelf';
  lowmidFilter.type = 'peaking';
  highmidFilter.type = 'peaking';
  highFilter.type = 'highshelf';
  lowFilter.frequency.value = 100;
  lowmidFilter.frequency.value =250;
  highmidFilter.frequency.value = 2500;
  highFilter.frequency.value = 10000;

  return {
    source: source,
    gainNode: gainNode,
    lowFilter: lowFilter,
    lowmidFilter: lowmidFilter,
    highmidFilter: highmidFilter,
    highFilter: highFilter
  };
}

app.context = new (window.AudioContext || window.webkitAudioContext)();
app.right.source = createSource(app.right.deck);
app.left.source = createSource(app.left.deck);