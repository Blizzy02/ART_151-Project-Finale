const WHITE_KEY_FIRST_OCTAVE = ["a","s","d","f","g","h","j","k"];
const BLACK_KEY_FIRST_OCTAVE = ["w","e","f","t","y","u","i"];
const WHITE_KEY_SECOND_OCTAVE = ["A","S","D","F","G","H","J","K"];
const BLACK_KEY_SECOND_OCTAVE = ["W","E","F","T","Y","U","I"];
const WHITE_KEY_SMALL_OCTAVE = ["Q"]



const keys = document.querySelectorAll(".key")

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown',e => {
     const key = e.key;
     const whiteKeyFirstIndex = WHITE_KEY_FIRST_OCTAVE.indexOf(key);
     const blackKeyFirstIndex = BLACK_KEY_FIRST_OCTAVE.indexOf(key);
     const whiteKeySecondIndex = WHITE_KEY_SECOND_OCTAVE.indexOf(key);
     const blackKeySecondIndex = BLACK_KEY_SECOND_OCTAVE.indexOf(key);
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener("ended", () => {
        key.classList.remove('active')
    })



}
