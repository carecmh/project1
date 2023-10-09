var myParagraph;
var paragraghTwo;
var paragraphThree
var myButton;
var buttontwo;
var img;
let hasClicked = false;
var h1;


function setup() {
  noCanvas();
  h1 = createElement('h1', 'Instant-gram');
  h1.position(220, 10);
  
  paragraghTwo = createP("Like/Dislike your friend's photo to move on to the next.")
  paragraghTwo.position(135,510);
 
  let button = createButton ("👍");
  button.mouseClicked(clicked);
  button.position(240,450);
  button.size(50, 50)
  

  let buttontwo = createButton("👎");
  buttontwo.mouseClicked(clickedtoo);
  buttontwo.position (345, 450);
  buttontwo.size(50,50)

  img = createImg("https://picsum.photos/300");
  img.position(170, 120);

}

function clicked () {
  let p = createP("TIME TO POST")
  p.position(random(510), random (510));
  p.style("color", "green")

  img.remove();
  img = createImg("https://picsum.photos/300?" + millis());
  img.position(170, 120);
}

function clickedtoo () {
  let p2 = createP("TIME TO POST")
  p2.position(random(510), random (510));
  p2.style("color", "green")
  
  img.remove();
  img = createImg("https://picsum.photos/300?" + millis());
  img.position(170, 120);
  }

function draw() {
  if (frameCount % 120 == 0) {
    let p4 = createP("YOU NEED TO POST");
    p4.position (random(505), random (505));
    p4.style ("color", "red");
  }
  if (frameCount % 180 == 0) {
    let p4 = createP("WHY HAVEN'T YOU POSTED?");
    p4.position (random(505), random (505));
  }
}

