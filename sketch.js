var myParagraph;
var paragraghTwo;
var paragraphThree
var myButton;
var buttontwo;
var img;

function setup() {
  noCanvas();
  myParagraph = createP("Title TBD");
  myParagraph.position(270,30);

  paragraghTwo = createP("Like this photo to move on to the next.")
  paragraghTwo.position(200,530);
 
  let button = createButton ("Like");
  button.mouseClicked(clicked);
  button.position(250,500);
  

  let buttontwo = createButton("Dislike");
  buttontwo.mouseClicked(clickedtoo);
  buttontwo.position (325, 500);
}

function clicked () {
  let p = createP("TIME TO POST")
  p.position(random(500), random (500));
}
function clickedtoo () {
  let p2 = createP("TIME TO POST")
  p2.position(random(500), random (500));
  }