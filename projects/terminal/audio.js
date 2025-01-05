// Define a function to play the audio file
function playAudio() {
    const audio = new Audio('motive.mp3');
    audio.play();
  }
  
  // Add an event listener to the document to listen for keypresses
  document.addEventListener('keydown', event => {
    // Check if the "numpadmult" key was pressed (key code 106)
    if (event.keyCode === 106) {
      playAudio();
    }
  });