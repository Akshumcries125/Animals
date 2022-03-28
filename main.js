function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kf78x9Ygs/', modelReady);
}

function modelReady(){
    classifier.classifying(gotResults);
}

function gotResults(error, results){
    console.log('gotResults');
}