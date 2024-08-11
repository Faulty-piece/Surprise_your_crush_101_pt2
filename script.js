
window.onload = () => {
  // Remove the "not-loaded" class after 1 second
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

};
