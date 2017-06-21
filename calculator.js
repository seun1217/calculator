var allDisplay = document.getElementById('all-display');
var currentDisplay = document.getElementById('current-display');
var allClear = document.getElementById('all-clear');
var currentClear = document.getElementById('current-clear');
var times = document.getElementById('times');
var over = document.getElementById('over');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var minus = document.getElementById('minus');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var plus = document.getElementById('plus');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var equal = document.getElementById('equal');
var zero = document.getElementById('zero');
var decimalPoint = document.getElementById('decimal-point');
var equalPressed = false;
var lastPressed = '';

function changeOp(op) {
  var previousOp = allDisplay.innerHTML.slice(-1);
  if(previousOp.search(/[\+\-\*/]/)> -1) {
    allDisplay.innerHTML = allDisplay.innerHTML.slice(allDisplay.innerHTML.length - 1);
    if(previousOp === '*' || previousOp == '/') {
      allDisplay.innerHTML = allDisplay.innerHTML.slice(1, allDisplay.innerHTML.length);
    }
  }
}

allClear.onclick = function() {
  allDisplay.innerHTML = '';
  currentDisplay.innerHTML ='';
  lastPressed = 'AC';
}

currentClear.onclick = function() {
  allDisplay.innerHTML = allDisplay.innerHTML.slice(0, allDisplay.innerHTML.lastIndexOf(currentDisplay.innerHTML));
  currentDisplay.innerHTML = '';
  lastPressed = 'CE';
  }


times.onclick = function() {
  changeOp('*');  
  if (equalPressed) {
    // if the last key press was an equal sign, 
    // upon pressing the * button, assign currentDisplay + * to allDisplay.
    // It is so implicit. lol
    allDisplay.innerHTML = currentDisplay.innerHTML + '*';
  } else {
    allDisplay.innerHTML = '(' + allDisplay.innerHTML + ')*';
  }
  currentDisplay.innerHTML = '';
  equalPressed = false;
  lastPressed = 'times';
}
over.onclick = function() {
  changeOp('/');  
  if (equalPressed) {
    allDisplay.innerHTML = currentDisplay.innerHTML + '/';
  } else {
    allDisplay.innerHTML = '(' + allDisplay.innerHTML + ')/';
  }
  currentDisplay.innerHTML = '';
  equalPressed = false;
  lastPressed = over;
}
plus.onclick = function() {
  changeOp('+');  
  if (equalPressed) {
    allDisplay.innerHTML = currentDisplay.innerHTML + '+';
  } else {
  allDisplay.innerHTML = allDisplay.innerHTML + '+';
  }
  currentDisplay.innerHTML = '';
  equalPressed = false;
  lastPressed = 'plus';
}
minus.onclick = function() {
  changeOp('-');  
  if (equalPressed) {
    allDisplay.innerHTML = currentDisplay.innerHTML + '-';
  } else {
    allDisplay.innerHTML = allDisplay.innerHTML + '-';
  }
  currentDisplay.innerHTML = '';
  equalPressed = false;
  lastPressed = 'minus';
}
// currentDisplay behaves different upon pressing numbers and the period depending on
// whether the last keypress was a number as well or not.
function lastPressedIsNumber (keyPress) {
  if(!isNan(keyPress)) {
    return true;
  } else {
    return false;
  }
}

zero.onclick = function() {
  allDisplay.innerHTML += 0;
  currentDisplay.innerHTML += 0;
  lastPressed = '0';
  if(!lastPressedIsNumber) {

  }
}
one.onclick = function() {
  allDisplay.innerHTML += 1;
  currentDisplay.innerHTML += 1;
  lastPressed = '1';
}
two.onclick = function() {
  allDisplay.innerHTML += 2;
  currentDisplay.innerHTML += 2;
  lastPressed = '2';
}
three.onclick = function() {
  allDisplay.innerHTML += 3;
  currentDisplay.innerHTML += 3;
  lastPressed = '3';
}
four.onclick = function() {
  allDisplay.innerHTML += 4;
  currentDisplay.innerHTML += 4;
  lastPressed = '4';

}
five.onclick = function() {
  allDisplay.innerHTML += 5;
  currentDisplay.innerHTML += 5;
  lastPressed = '5';
}
six.onclick = function() {
  allDisplay.innerHTML += 6;
  currentDisplay.innerHTML += 6;
  lastPressed = '6';
}
seven.onclick = function() {
  allDisplay.innerHTML += 7;
  currentDisplay.innerHTML += 7;
  lastPressed = '7';
}
eight.onclick = function() {
  allDisplay.innerHTML += 8;
  currentDisplay.innerHTML += 8;
  lastPressed = '8';
}
nine.onclick = function() {
  allDisplay.innerHTML += 9;
  currentDisplay.innerHTML += 9;
  lastPressed = '9';
}
decimalPoint.onclick = function() {
  allDisplay.innerHTML += '.';
  currentDisplay.innerHTML += '.';
  lastPressed = '.';
}

equal.onclick = function() {
  equalPressed = true;
  currentDisplay.innerHTML = Math.round(eval(allDisplay.innerHTML) * 1000) / 1000;
  allDisplay.innerHTML += '=' + Math.round(eval(allDisplay.innerHTML) * 1000) / 1000;
}






이쯤에서 git을 해보는것도 나쁘지 않을것같네요.

// $(document).ready(function() {
//   $('#all-clear').click(function() {
//     $('#all-display').empty();
//     $('#current-display').empty();
//   });
//   $('#current-clear').click(function() {
//     var currentClearBuffer = $('#current-display');
//     console.log(currentClearBuffer);
//     $('#current-display').empty();

//     $('#all-display').html('asdas');
//   });
//   $('times').click(function() {
//     $('#all-display').append('*');
//     $('#current-display');
//   });
// });