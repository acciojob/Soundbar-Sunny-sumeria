const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        const audio = document.getElementById(sound);
        
        // Wrap play in a promise check to prevent unhandled rejection errors
        if (audio) {
            audio.play().catch(e => {
                console.log("Audio play failed, likely missing file:", e.message);
            });
        }
    });

    document.getElementById('buttons').appendChild(btn);
});

// The stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

document.getElementById('buttons').appendChild(stopBtn);

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        if (song) {
            song.pause();
            song.currentTime = 0;
        }
    });
}