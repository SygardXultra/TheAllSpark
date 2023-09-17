leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function preload(){
    Peter_pan_song = loadSound("Peter Pan and the Pirates.mp3");
    Harry_potter_theme_song = loadSound("Harry Potter.mp3");
}
function modelLoaded() {
    console.log('Pose Net is Working :D')
}

function draw(){
    image(video,0,0,600,530);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
    }
}
