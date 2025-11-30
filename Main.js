const video = document.getElementById('myVideo');
const audio = document.getElementById('myAudio');

video.addEventListener('ended', function() {
    setTimeout(function() {
        audio.play();
    },100); 
});