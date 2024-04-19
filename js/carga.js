window.addEventListener("load", function(){
  const loader = document.getElementById("loader-wrapper");
  setTimeout(function(){
    loader.style.opacity = "0";
    setTimeout(function(){
      loader.style.display = "none";
      Swal.fire(
        'BIENVENIDO',
        'DALE CLICK PARA ESTAR PIOLA!',
        'success'
      );
    }, 500);
  }, 1000);
});