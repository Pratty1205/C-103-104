Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })
}
console.log("ML5VERSION:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/N75faa0O2/model.json',model_loaded());
function model_loaded() {
    console.log("model_loaded");
}