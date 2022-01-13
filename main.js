function startClassification() {
navigator.mediaDevices.getUserMedia({audio:true})
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9NB8nVIRK/model.json" , modelLoaded)
}

function modelLoaded(){
    classifier.classify(gotResults)
}

