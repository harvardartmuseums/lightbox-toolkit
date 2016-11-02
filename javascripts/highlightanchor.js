window.onload = function() {
  var url = window.location.href;
  var anchor = url.split("#").pop();
  
  var anchoredElements = document.getElementsByClassName("anchors");
  
  for (var i = 0; i < anchoredElements.length; i++) {
    anchoredElements[i].style.background = "#ffffff";
  }
  
  var anchored = document.getElementById(anchor);
  if (anchored) {
    anchored.style.background = "#ccffff";
  }
}
