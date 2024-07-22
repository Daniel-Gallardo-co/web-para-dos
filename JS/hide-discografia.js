function mostrarOcultarLista(idLista) {
    const lista = document.getElementById(idLista);
    if (lista.style.display === 'none') {
      lista.style.display = 'block';
    } else {
      lista.style.display = 'none';
    }
  }

  function mostrarOcultarKillEmAll() {
    mostrarOcultarLista('lista-kill-em-all');
  }

  function mostrarOcultarRTL() {
    mostrarOcultarLista('lista-rtl');
  }

  function mostrarOcultarMasterOfPuppets() {
    mostrarOcultarLista('lista-master-of-puppets');
  }

  function mostrarOcultarAndJusticeForAll() {
    mostrarOcultarLista('lista-and-justice-for-all');
  }
  
  function mostrarOcultarBlackAlbum() {
    mostrarOcultarLista('lista-black-album');
  }

  function mostrarOcultarLoad() {
    mostrarOcultarLista('lista-load');
  }

  function mostrarOcultarReload() {
    mostrarOcultarLista('lista-reload');
  }

  function mostrarOcultarStAnger() {
    mostrarOcultarLista('lista-st-anger');
  }

  function mostrarOcultarDeathMagnetic() {
    mostrarOcultarLista('lista-death-magnetic');
  }

  function mostrarOcultarHardwired() {
    mostrarOcultarLista('lista-hardwired');
  }