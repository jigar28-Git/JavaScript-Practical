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
// for on the buttons 
const screen = document.getElementById("myInput");
const ans = document.getElementById("ansInput");
let screenValue = ""; // inital value on the screen is empty
document.getElementById("calculator").addEventListener("click", function(e) {
  const tgt = e.target;
  if (tgt.tagName !== "BUTTON") return;

  var buttonText = tgt.innerText; //  Gets the text of that button which is clicked 
 
  if (buttonText == 'x') { // since the cross X sign is * multiplication sign.
    buttonText = '*';
    screen.value = screenValue;
  }
  if (buttonText == '÷') { // since the cross X sign is * multiplication sign.
    buttonText = '/';
    screenValue += buttonText;
    screen.value = screenValue;
  } 
  else if (buttonText == '(') {
    buttonText = "*(";
    screenValue += buttonText;
    screen.value = screenValue;
  }
  else if (buttonText == 'C') { // for clearing the screen
    screenValue = " ";
    screen.value = screenValue;
  }
  
  else if (buttonText == '🡄') { // for clearing last entered
    screenValue = screenValue.slice(0,-1);
    screen.value = screenValue;
  } 
  else if (buttonText == '=') { // = for calculating the arithmetic operation.
    ans.value = eval(screenValue);
  } else {
    screenValue += buttonText; // for appending inputs together
    screen.value = screenValue;
  }
})