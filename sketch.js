var myParagraph;
var paragraghTwo;
var paragraphThree;
var myButton;
var buttontwo;
var img;
let hasClicked = false;
var h1;
var array = ['Time to post', 'Post content', 'Are you doing something cool?', 'Are you doing what others are doing?', 'Have you checked your like count?', 'Are you happy?', 'Are you doing something cool?', 'Why have you not posted yet?', 'It is time for you to post','Other people have to know what you are doing', 'Show people what you are doing', 'Compare yourself to others'];


function setup() {
  noCanvas();
  h1 = createElement('h1', 'Instagrad');
  h1.position(310, 10);
  
  paragraghTwo = createP("Like/Dislike your friend's photo to move on to the next.");
  paragraghTwo.position(190,520);
 
  let button = createButton ("👍");
  button.mouseClicked(clicked);
  button.position(290,450);
  button.size(50, 50);
  

  let buttontwo = createButton("👎");
  buttontwo.mouseClicked(clickedtoo);
  buttontwo.position (415, 450);
  buttontwo.size(50,50);

  img = createImg("https://picsum.photos/300");
  img.position(230, 120);
  img.elt.style.zIndex = -1;

}

function clicked () {
  let p = createP(random(array));
  p.position(random(510), random (510), 1);
  p.style("color", "green");

  img.remove();
  img = createImg("https://picsum.photos/300?" + millis());
  img.position(230, 120);
  img.elt.style.zIndex = -1;
}

function clickedtoo () {
  let p2 = createP(random(array));
  p2.position(random(510), random (510));
  p2.style("color", "green");
  
  img.remove();
  img = createImg("https://picsum.photos/300?" + millis());
  img.position(230, 120);
  img.elt.style.zIndex = -1;
  }

function draw() {
  if (frameCount % 100 == 0) {
    let p4 = createP("YOU NEED TO POST");
    p4.position (random(510), random (505));
    p4.style ("color", "red");
  }
  if (frameCount % 200 == 0) {
    let p4 = createP("WHY HAVEN'T YOU POSTED?");
    p4.position (random(510), random (505));
  }
  if (frameCount % 300 == 0) {
    let p5 = createP("ARE YOU COMPARING YOURSELF YET?");
    p5.position (random(510), random(505));
}
}
