
async function loadRandomPokemonImage() {
  const image = document.querySelector('.random-image');

  try {

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;


    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    const data = await response.json();


    const imageUrl = data.sprites.front_default;


    image.src = imageUrl;
    image.alt = `Pokemon ${randomPokemonId}`;
  } catch (error) {
    console.error('Error al cargar la imagen del Pokemon:', error);
  }
}


window.onload = loadRandomPokemonImage;
