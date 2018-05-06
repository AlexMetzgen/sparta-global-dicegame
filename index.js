// Your code here
var numhold =Math.floor((Math.random()*6)+1);
var diceNumber=numhold.toString();
var diceColorPos=[];
switch (diceNumber) {
  //dice rolls 1
  case "1":
    diceColorPos[0]= document.getElementById("wrapper5");
    changeColor();
  break;
//Dice rolls 2
  case "2":
  var setTwo =["wrapper1","wrapper9"];
  for (var i = 0; i < numhold; i++) {
diceColorPos[i]= document.getElementById(setTwo[i]);
  }
    changeColor();
  break;
//dice rolls 3
  case "3":
  var setThree =["wrapper2","wrapper7","wrapper9","wrapper7","wrapper9"];
  for (var i = 0; i < numhold; i++) {
diceColorPos[i]= document.getElementById(setThree[i]);
  }
    changeColor();
  break;
//dice rolls 4
  case "4":
  var setFour =["wrapper1","wrapper3","wrapper7","wrapper9"];
  for (var i = 0; i < numhold; i++) {
diceColorPos[i]= document.getElementById(setFour[i]);
  }
    changeColor();
  break;
//Dice rolls5
  case "5":
  var setFive =["wrapper1","wrapper3","wrapper5","wrapper7","wrapper9"];
  for (var i = 0; i < numhold; i++) {
diceColorPos[i]= document.getElementById(setFive[i]);
  }
    changeColor();
  break;
//Dice rolls 6
  case "6":
  var setSix =["wrapper1","wrapper2","wrapper3","wrapper7","wrapper8","wrapper9"];
  for (var i = 0; i < numhold; i++) {
diceColorPos[i]= document.getElementById(setSix[i]);
  }
    changeColor();
  break;
  default:
}
//chnage color function
function changeColor(){
  for (var i = 0; i < numhold; i++) {
    diceColorPos[i].style.backgroundColor="blue";
  }
}
