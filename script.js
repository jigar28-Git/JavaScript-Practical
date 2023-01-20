function changefontsize() {
  var myInput = document.getElementById("myInput");
  if (isOverflown(myInput)) {
    while (isOverflown(myInput)) {
      currentfontsize--;
      myInput.style.fontSize = currentfontsize + "4px";
    }
  } else {
    currentfontsize = 40;
    myInput.style.fontSize = currentfontsize + "px";
    while (isOverflown(myInput)) {
      currentfontsize--;
      myInput.style.fontSize = currentfontsize + "8px";
    }
  }
}

function isOverflown(element) {
  return element.scrollWidth > element.clientWidth;
}
