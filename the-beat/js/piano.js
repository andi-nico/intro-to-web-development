// This file provides the functionality for the piano keyboard

const keys = document.querySelectorAll('.key') //Select all elements with the class "key". Using "const" instead of var because the variable should not change in the future
const whiteKeys = document.querySelectorAll('.key.white') //Select all the white keys using a combo class
const blackKeys = document.querySelectorAll('.key.black') //Select all black keys using a combo class

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

//add functionality to keys using event listener. keys will play the associated note when pressed
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note) //use "dataset" to call the html data attribute
  noteAudio.currentTime = 0 //restarts the audio file at the beginning each time the key is pressed
  noteAudio.play() //plays audio
  key.classList.add('active') //indicates that the key is being pressed
  noteAudio.addEventListener('ended', () => { //removes the active state when the key is not being pressed anymore
    key.classList.remove('active')
  })
}
