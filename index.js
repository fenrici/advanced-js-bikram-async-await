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