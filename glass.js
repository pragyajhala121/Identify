img = "";
function preload(){
    img = loadImage("Glass.jpg");
}
function setup(){
    canvas = createCanvas(640,540);
    canvas.center();
}


function draw(){
    image(img,0,0,640,640);
    fill('#ff0000');
    text("Glass", 80, 60);
    noFill();
    stroke("#ff0000");
    rect(50,20,500,450)
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}