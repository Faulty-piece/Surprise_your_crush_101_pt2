window.onload = () => {
  // Remove the "not-loaded" class after 1 second
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Get the audio element and the unmute button
  const audio = document.getElementById('testAudio');
  const unmuteButton = document.getElementById('unmuteButton');

  // Play audio on load but muted
  if (audio) {
    audio.play().catch(() => {
      // Handle playback error silently
    });
  }

  // Unmute audio on user interaction
  if (unmuteButton) {
    unmuteButton.addEventListener('click', () => {
      audio.muted = false;
      audio.play().catch(() => {
        // Handle playback error silently
      });
    });
  }
};
