function mostrarOcultar() {
    const elemento = document.getElementById("elemento-oculto");
    if (elemento.style.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  }