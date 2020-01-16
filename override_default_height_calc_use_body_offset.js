var heightCalc = {};

heightCalc.getComputedStyle = function (prop) {
  var result = null;
  if ('getComputedStyle' in window) {
    result = window.getComputedStyle(window.document.body, null);
  } else {
    result = window.document.defaultView.getComputedStyle(window.document.body, null);
  }
  return result !== null ? parseInt(result[prop], 10) : 0;
};

// Override default height calculation mehtod and use bodyOffset height calculation method instead
window.CernerSmartEmbeddableLib.calcFrameHeight = function() {
  return window.document.body.offsetHeight + heightCalc.getComputedStyle('marginTop') + heightCalc.getComputedStyle('marginBottom');
};
