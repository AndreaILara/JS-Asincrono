
const charactersData = {};

async function loadCharacters() {
  const select = document.getElementById('character-list');

  try {

    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();


    data.forEach(character => {
      charactersData[character.fullName] = {
        imageUrl: character.imageUrl,
        fullName: character.fullName,
      };

      const option = document.createElement('option');
      option.value = character.fullName;
      option.text = character.fullName;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Error al cargar los personajes:', error);
  }
}


function loadCharacterImage() {
  const select = document.getElementById('character-list');
  const image = document.getElementById('character-image');
  const selectedCharacter = select.value;


  const selectedCharacterData = charactersData[selectedCharacter];


  image.src = selectedCharacterData.imageUrl;
  image.alt = selectedCharacterData.fullName;
}


window.onload = loadCharacters;
