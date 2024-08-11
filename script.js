
window.onload = () => {
  // Remove the "not-loaded" class after 1 second
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

  // Create the iframe element
  const iframe = document.createElement('iframe');
  
  // Set the iframe attributes
  iframe.allow = 'autoplay';
  iframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/366184949&client_id=nFddmw3ZibOug7XKUPPyXjYCElJCcGcv&color=%23ff5500&auto_play=true';
  iframe.style.display = 'none';  // Hide the iframe

  // Append the iframe to the body
  document.body.appendChild(iframe);
};
