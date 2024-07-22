function mostrarOcultarLista(idLista) {
    const lista = document.getElementById(idLista);
    if (lista.style.display === 'none') {
      lista.style.display = 'block';
    } else {
      lista.style.display = 'none';
    }
  }
  
  function mostrarOcultarAMAs() {
    mostrarOcultarLista('lista-premios-amas');
  }
  
  function mostrarOcultarGrammys() {
    mostrarOcultarLista('lista-premios-grammys');
  }
  
  function mostrarOcultarMTVs() {
    mostrarOcultarLista('lista-premios-mtvs');
  }  