async function geteEstadoData(codigoEstados) {
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${codigoEstados}/municipios`);
      const jsonData = await data.json();
  
      const spritesArray = Object.values(jsonData.sprites).filter(sprite => typeof sprite === 'string');
      generateInfoSection(spritesArray, codigoEstados);
    } catch (error) {
      console.error(error);
    }
  }

  function getSearchParams() {
  
    if (!location.search) {
      return;
    }
  
    const urlSearchParams = new URLSearchParams(location.search);
  
    const codigoEstados = urlSearchParams.get('uf');
    
    changePageTitle(`${UF}`);
    getEstadoData(UF);
  }

  function changePageTitle(title) {
    document.title = title;
  }
  
  function generateInfoSection(sprites, estadosNome) {
    const h2 = document.createElement('h2');
    h2.id = "info-estados-label";
    h2.textContent = `Informações sobre ${estadosNome}`;

    const h1 = document.createElement('h1');
    h1.id = "page-title";
    h1.textContent = `${estadosNome}`;
