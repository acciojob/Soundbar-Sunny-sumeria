//your JS code here. If required.

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs(); // Stop any currently playing audio
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

// Create the Stop Button separately to give it the 'stop' class
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

document.getElementById('buttons').appendChild(stopBtn);

// Function to pause all audio and reset their time to 0
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
