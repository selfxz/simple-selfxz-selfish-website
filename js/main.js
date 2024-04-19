/* Efecto de partículas de fondo */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Partículas cargadas.');
});

/* Animación de carga */
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader-wrapper");
  loader.className += " hidden"; // oculta el div de la animación
});
