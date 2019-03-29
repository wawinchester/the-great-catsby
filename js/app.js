

var cat =[
  'bingley',
  'catsby',
  'fluffy',
  'orion',
  'sprinkles',
  'tabby',
  'winston'
];

//This function returns a random "lucky cat" when the button is clicked

function newCat () {
  idArray = new Array()
  idArray [0] = "Bingley"
  idArray [1] = "Catsby"
  idArray [2] = "Fluffy"
  idArray [3] = "Orion"
  idArray [4] = "Sprinkles"
  idArray [5] = "Tabby"
  idArray [6] = "Winston"

document.getElementById("lucky").onclick = newCat;
randomCat = Math.floor(Math.random()*7);

 document.getElementById('result').innerHTML = idArray[randomCat];

}
