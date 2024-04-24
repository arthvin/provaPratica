async function getPokemonData(UF) {
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`);
      const jsonData = await data.json();
  
      const spritesArray = Object.values(jsonData.sprites).filter(sprite => typeof sprite === 'string');
      generateInfoSection(spritesArray, UF);
    } catch (error) {
      console.error(error);
    }
  }

  function generateInfoSection(sprites, UFname) {
    const h2 = document.createElement('h2');
    h2.id = "info-municipio-label";
    h2.textContent = `Informações sobre ${UFname}`;

    const h1 = document.createElement('h1');
    h1.id = "page-title";
    h1.textContent = `Página do ${UFname}`;
  
    const img = document.createElement('img');
    //const img = document.querySelector('img');
    img.src = sprites[0];
    img.alt = `Imagem do pokemon ${UFname}`;
    let currentIndex = 0;
  
    img.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % sprites.length;
      img.src = sprites[currentIndex];
    });

  }