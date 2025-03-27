//DESARROLLA AQUI TUS SOLUCIONES
// Ejercicio 2

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

// Ejercicio 1
async function getRandomPokemon() {
    try {
    let randomPkm = Math.floor(Math.random()* 1302); // Hay 1302 pokemons 
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkm}`);
    let data = await response.json();
    return data;
    } catch (error) { console.error("Error fetching data:", error);
        
};
    }
    getRandomPokemon().then(data => console.log(data));

// Ejercicio 3
async function printImageAndName() {
    try {
        let Pkm = 'kakuna';
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pkm}`);
        let data = await response.json();

        return `
            <section>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h1>${data.name}</h1>
            </section>
        `;

    } catch (error) {
        console.error("Error fetching data:", error);
        return '';
    }
}

async function domImage() {
    let html = await printImageAndName();
    
    if (html) {
        let container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);
    }
}

// Llamamos a la función para agregar el contenido al DOM
domImage();

    
// Ejercicio 4
async function getRandomDogImage() {
    try {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    
    return data.message;
    } catch (error) {
        console.error("Error fetching data:", error);
}}
getRandomDogImage().then(data => console.log(data));

// Ejercicio 5
async function getRandomPokemonImage() {
    try {
        let randomPkm = Math.floor(Math.random() * 1302); // Hay 1302 pokemons
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkm}`);
        let data = await response.json();
        return data.sprites.front_default;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getRandomPokemonImage().then(data => console.log(data));

// Ejercicio 6
document.addEventListener('DOMContentLoaded', async function () {
    // Crear elementos principales
    const body = document.body;
    const title = document.createElement('h1');
    title.textContent = 'Velada 7: Pug vs Pikachu';
    
    const battleContainer = document.createElement('div');
    battleContainer.style.display = 'flex';
    battleContainer.style.justifyContent = 'center';
    battleContainer.style.alignItems = 'center';

    // Crear contenedor de Pug
    const pugContainer = document.createElement('div');
    pugContainer.style.textAlign = 'center';

    const pugTitle = document.createElement('h2');
    pugTitle.textContent = 'Pug';

    const pugImg = document.createElement('img');
    

    // Obtener imagen del Pug desde la API
    try {
        const response = await fetch('https://dog.ceo/api/breed/pug/images/random');
        const data = await response.json();
        pugImg.src = data.message;
    } catch (error) {
        console.error('Error obteniendo la imagen del Pug:', error);
        pugImg.alt = 'Error al cargar la imagen';
    }

    // Crear el texto "VS"
    const vsText = document.createElement('h1');
    vsText.textContent = 'VS';

    // Crear contenedor de Pikachu
    const pikachuContainer = document.createElement('div');
    pikachuContainer.style.textAlign = 'center';

    const pikachuTitle = document.createElement('h2');
    pikachuTitle.textContent = 'Pikachu';

const pikachuImg = document.createElement('img');
    pikachuImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
   

    // Añadir elementos al DOM
pugContainer.appendChild(pugTitle);
pugContainer.appendChild(pugImg);

pikachuContainer.appendChild(pikachuTitle);
pikachuContainer.appendChild(pikachuImg);

battleContainer.appendChild(pugContainer);
 battleContainer.appendChild(vsText);
battleContainer.appendChild(pikachuContainer);
body.appendChild(title);
body.appendChild(battleContainer);
});

// Ejercicio 7  
async function getRandomCharacter() {
    try {
    let randomChar = Math.floor(Math.random() * 826); // Hay 826 personajes
    let response = await fetch(`https://rickandmortyapi.com/api/character/${randomChar}`);
    let data = await response.json();
    return data;
} catch (error) {
    console.error("Error fetching data:", error);
} 
}          
getRandomCharacter().then(data => console.log(data));

// Ejercicio 8
async function getRandomCharacterInfo() {
    try {
        let randomChar = Math.floor(Math.random() * 826); // Hay 826 personajes
        let response = await fetch(`https://rickandmortyapi.com/api/character/${randomChar}`);
        let data = await response.json();
        
        let img = data.image;
        let name = data.name;
        let episodes = data.episode;
        
        let firstEpisodeUrl = data.episode[0];
        let firstEpisodeResponse = await fetch(firstEpisodeUrl);
        let firstEpisodeData = await firstEpisodeResponse.json();
        
        let firstEpisode = firstEpisodeData.name;
        let dateEpisode = firstEpisodeData.air_date;
        
        return { img, name, episodes, firstEpisode, dateEpisode };
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getRandomCharacterInfo().then(data => console.log(data));

// Ejercicio 9
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const characterInfo = await getRandomCharacterInfo();

        if (characterInfo) {
            const contenido = document.createElement('div');

            const img = document.createElement('img');
            img.src = characterInfo.img;
            img.alt = characterInfo.name;

            const name = document.createElement('h2');
            name.textContent = `Name: ${characterInfo.name}`;

            const episodes = document.createElement('p');
            episodes.textContent = `Episodes: ${characterInfo.episodes.length}`;

            const firstEpisode = document.createElement('p');
            firstEpisode.textContent = `First Episode: ${characterInfo.firstEpisode} (Aired on: ${characterInfo.dateEpisode})`;

            contenido.appendChild(img);
            contenido.appendChild(name);
            contenido.appendChild(episodes);
            contenido.appendChild(firstEpisode);

            document.body.appendChild(contenido);
        }
    } catch (error) {
        console.error("Error loading info", error);
    }
});