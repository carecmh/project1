var myParagraph;
var paragraghTwo;
var paragraphThree
var myButton;
var buttontwo;
var img;
let hasClicked = false;


function setup() {
  noCanvas();
  myParagraph = createP("Title TBD");
  myParagraph.position(270,30);

  img = createImg("https://picsum.photos/200");
  img.position(200, 200);

  paragraghTwo = createP("Like or dislike this photo to move on to the next.")
  paragraghTwo.position(160,530);
 
  let button = createButton ("👍");
  button.mouseClicked(clicked);
  button.position(250,500);
  

  let buttontwo = createButton("👎");
  buttontwo.mouseClicked(clickedtoo);
  buttontwo.position (325, 500);
}

function draw() {
  if (frameCount % 60 == 0) {
    let p4 = createP("YOU NEED TO POST");
    p4.position (random(500), random (500));
    p4.style ("color", "red");
  }
  if (frameCount % 120 == 0) {
    let p4 = createP("WHY HAVEN'T YOU POSTED?");
    p4.position (random(500), random (500));
  }
}

function clicked () {
  let p = createP("TIME TO POST")
  p.position(random(510), random (510));
  p.style("color", "red")

  img.remove();
  img = createImg("https://picsum.photos/200?" + millis());
  img.position(200, 200);
}

function clickedtoo () {
  let p2 = createP("TIME TO POST")
  p2.position(random(510), random (510));
  p2.style("color", "red")
  
  img.remove();
  img = createImg("https://picsum.photos/200?" + millis());
  img.position(200, 200);
  }