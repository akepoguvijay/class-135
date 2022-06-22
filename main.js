status="";

function preload()
{
    video = createVideo("videoplayback.mp4");
}

function setup()
{
    canvas = createCanvas(600,600);
    canvas.center();
}

function draw()
{
    image(video,0,0,600,600);
}

function start()
{
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = " Status: Detecting Objects ";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}