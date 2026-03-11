function openDialog() {
    document.getElementById('dialog').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function playAudio(file){
    var sound = document.getElementById(file);
    var button = document.getElementById("audio-"+file);
    if(!sound.paused){
        sound.pause();
        button.classList.remove('pause');
    }
    else{
        sound.play();
        button.classList.add('pause');
    }
}

function pauseAudio(file){
    var sound = document.getElementById(file);
    var button = document.getElementById("audio-"+file);
    sound.pause();
    button.classList.remove('pause');
}

function changeVolume(file){
    var sound = document.getElementById(file);
    var slider = document.getElementById('volume-slider-'+file);
    sound.volume = slider.value;
}

function pauseAll(){
    const FILENUM = 4;
    for (let i=1; i<FILENUM+1; i++){
        pauseAudio(i);
    }
    // const allAudios = document.querySelectorAll('audio');
    // console.log(allAudios);
    // allAudios.forEach(audioEl => {
    //     audioEl.pause();
    // });
}

// let volume = document.getElementById('volume-slider');
// volume.addEventListener(file,"change", function(e) {
//     var sound = document.getElementById(file)
//     sound.volume = e.currentTarget.value / 100;
// })