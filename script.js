const audioPlayer = document.getElementById('audio');
const playlist = document.querySelectorAll('.playlist li a');

for (let i = 0; i < playlist.length; i++) {
    playlist[i].addEventListener('click', function (e) {
        e.preventDefault();
        const source = this.getAttribute('data-src');
        audioPlayer.src = source;
        audioPlayer.play();
    });
}
