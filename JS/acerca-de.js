// Aplicar función JQuery manejando eventos
$(document).ready(function() {
  // Evento click en el botón "Mas Información"
  $(".boton").on("click", function() {
    alert("Has clickeado en el botón 'Mas Información'");
  });

  // Aplicar un Efectos JQuery
  $("#about-agile").fadeIn(2000);

  // Aplicar un Widgets
  function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    $("#clock").text(hours + ":" + minutes + ":" + seconds);
  }
  setInterval(clock, 1000);

  // Aplicar una Interacción (tooltip)
  $("#tooltip").mouseover(function() {
    $(this).append("<span id='tooltip-text'> Este es un tooltip!</span>");
  }).mouseout(function() {
    $("#tooltip-text").remove();
  });
});