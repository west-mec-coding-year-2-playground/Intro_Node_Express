fetch('https://pokeapi.co/api/v2/pokemon/abra/')
    .then(res => res.json()) //reponse type
    .then(data => {
        const {
            ...img
        } = data.sprites;
        console.log(data.sprites)
        selector = document.getElementById('sprite');
        pokeIMG = `<img src="${img.front_default}">`;
        console.log(selector);
        selector.innerHTML = pokeIMG;
    });

fetch('https://pokeapi.co/api/v2/pokemon/kadabra/')
    .then(res => res.json()) //response type
    .then(data => {
        const {
            ...img
        } = data.sprites;
        console.log(data.sprites)
        selector = document.getElementById('spriteE');
        pokeIMG = `<img src="${img.front_default}">`;
        selector.innerHTML = pokeIMG;
    });