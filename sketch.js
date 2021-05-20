//Create variables here
var dog, dogImg,happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  happyDog = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  database.ref('/').on("value", function(data){
    foodStock = data.val();
    food : foodS
  })

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  

background(46,139,87);

  if(keyDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  fill("black");
   text(foodStock, 10,10);

}

function restock(){
  food-data.val();
}

function writeStock(x){
  if(x<=0){
    x =0
  }
  else{
    x = x-1
  }
    database.ref('/').update({
      Food:x
    })
}
