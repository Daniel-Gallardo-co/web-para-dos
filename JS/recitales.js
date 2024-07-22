$(document).ready(function() {
    // Aplicar función JQuery manejando eventos
    $('nav a').on('click', function() {
      $(this).css('background-color', 'yellow');
    });
  
    // Aplicar un Efecto JQuery
    $('h1').fadeIn(2000);
  
    // Aplicar un Widgets
    $('#recitales-table').DataTable({
      "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    });
  
    // Aplicar una Interacción
    $('table tr').on('mouseover', function() {
      $(this).css('background-color', 'grey');
    }).on('mouseout', function() {
      $(this).css('background-color', 'black');
    });
  });