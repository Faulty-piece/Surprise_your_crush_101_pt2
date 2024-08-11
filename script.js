
window.onload = () => {
  // Remove the "not-loaded" class after 1 second
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

  // Create an audio element and set its properties
  const audio = new Audio('IWannaBeYours.mp3');
  audio.loop = true; // Set the audio to loop
  audio.autoplay = true; // Set the audio to play automatically

  // Play the audio
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
  });
};
