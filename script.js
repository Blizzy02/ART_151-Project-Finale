const FIRST_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'w','e','r','t','y','u','i','o']
const FIRST_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j','3','4','6','7','8']
// const SECOND_WHITE_KEYS = ['t', 'y', 'u', 'i', 'o', 'p', '[']
// const SECOND_BLACK_KEYS = ['6', '7', '9', '0', '-']

const keys = document.querySelectorAll('.key')
const FirstWhiteKeys = document.querySelectorAll('.key.white')
const FirstBlackKeys = document.querySelectorAll('.key.black')
// const SecondWhiteKeys = document.querySelectorAll('.second-key.white')
// const SecondBlackKeys = document.querySelectorAll('.second-key.black')

keys.forEach(key => {
  key.addEventListener('mousedown', () => playNoteVisuals(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const FirstWhiteKeysIndex = FIRST_WHITE_KEYS.indexOf(key)
  const FirstBlackKeysIndex = FIRST_BLACK_KEYS.indexOf(key)
  // const SecondWhiteKeysIndex = SECOND_WHITE_KEYS.indexOf(key)
  // const SecondBlackKeysIndex = SECOND_BLACK_KEYS.indexOf(key)

  if (FirstWhiteKeysIndex > -1) playNoteVisuals(FirstWhiteKeys[FirstWhiteKeysIndex])
  if (FirstBlackKeysIndex > -1) playNoteVisuals(FirstBlackKeys[FirstBlackKeysIndex])
  // if (SecondWhiteKeysIndex > -1) playNoteVisuals(SecondWhiteKeys[SecondWhiteKeysIndex])
  // if (SecondBlackKeysIndex > -1) playNoteVisuals(SecondBlackKeys[SecondBlackKeysIndex])
})

function playNoteVisuals(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  if (!noteAudio) return
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active', 'pressed')

  const removePressed = () => {
    key.classList.remove('pressed')
    document.removeEventListener('keyup', removePressed)
  }

  document.addEventListener('keyup', removePressed)

  const clickedKey = document.querySelector(`[data-note="${key.dataset.note}"]`)
  clickedKey.classList.add('active')

  setTimeout(() => {
    clickedKey.classList.remove('active')
  }, 150)
}
