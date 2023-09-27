var myParagraph;
var paragraghTwo;
var myButton;
var buttontwo;
var img;

function preload() {
  img = loadImage("RecruitmentHeadshot.jpg")
}

function setup() {
  myParagraph = createP("Title TBD");
  myParagraph.position(150,30);

  paragraghTwo = createP("Like this photo to move on to the next.")
  paragraghTwo.position(60,330);
 
  myButton = createButton("Like");
  myButton.position(100, 300);

  buttontwo = createButton("Dislike");
  buttontwo.position (200, 300);
}


function draw() {
image(img, 100, 200, 100, 100)
}
