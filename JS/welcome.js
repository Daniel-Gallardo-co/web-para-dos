document.addEventListener('DOMContentLoaded', function() {
    // Constantes
    const COOKIES_SECTION_SELECTOR = '.cookies';
    const NO_BUTTON_SELECTOR = '.cookies__boton--no';
    const YES_BUTTON_SELECTOR = '.cookies__boton--si';
  
    // Función para manejar el click en el botón de no aceptar cookies
    function handleNoButtonClicked() {
      localStorage.setItem('cookiesAccepted', 'no');
      document.querySelector(COOKIES_SECTION_SELECTOR).style.display = 'none';
      alert('Has rechazado las cookies');
    }
  
    // Función para manejar el click en el botón de aceptar cookies
    function handleYesButtonClicked() {
      localStorage.setItem('cookiesAccepted', 'yes');
      document.querySelector(COOKIES_SECTION_SELECTOR).style.display = 'none';
      alert('Has aceptado las cookies');
    }
  
    // Función para verificar si ya se ha aceptado antes
    function checkIfCookiesAccepted() {
      if (localStorage.getItem('cookiesAccepted') === 'yes') {
        document.querySelector(COOKIES_SECTION_SELECTOR).style.display = 'none';
        alert('Has aceptado las cookies anteriormente');
      }
    }
  
    // Inicializar eventos
    document.querySelector(NO_BUTTON_SELECTOR).addEventListener('click', handleNoButtonClicked);
    document.querySelector(YES_BUTTON_SELECTOR).addEventListener('click', handleYesButtonClicked);
  
    // Verificar si ya se ha aceptado antes
    checkIfCookiesAccepted();
  });