img = "";
function preload(){
    img = loadImage("Fork.jpg");
}
function setup(){
    canvas = createCanvas(640,540);
    canvas.center();
}


function draw(){
    image(img,0,0,640,640);
    fill('#ff0000');
    text("Fork", 80, 120);
    noFill();
    stroke("#ff0000");
    rect(50,90,500,420);
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