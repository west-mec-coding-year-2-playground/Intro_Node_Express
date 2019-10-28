fetch('https://pokeapi.co/api/v2/pokemon/abra/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('sprite');
        pokeIMG = `<img src="${img.front_default}">`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
        document.getElementById('spriteS').innerHTML = `<img src="${img.front_shiny}">`
    });

fetch('https://pokeapi.co/api/v2/pokemon/kadabra/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('spriteK');
        pokeIMG = `<img src="${img.front_default}">`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
    });

fetch('https://pokeapi.co/api/v2/pokemon/alakazam/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('spriteA');
        pokeIMG = `<img src="${img.front_default}">`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
    });
fetch('https://pokeapi.co/api/v2/pokemon/alakazam-mega/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('spriteM');
        pokeIMG = `<img src="${img.front_default}">`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
    });
fetch('https://pokeapi.co/api/v2/pokemon/honedge/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('spriteH');
        pokeIMG = `<img src="${img.front_shiny}">`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
    });
fetch('https://pokeapi.co/api/v2/pokemon/doublade/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('spriteD');
        pokeIMG = `<img src='${img.front_shiny}'>`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
    });
fetch('https://pokeapi.co/api/v2/pokemon/aegislash-shield/')
    .then(res => res.json())
    .then(data => {
        const {
            ...img
        } = data.sprites;
        selector = document.getElementById('spriteS');
        pokeIMG = `<img src="${img.front_shiny}">`;
        selector.innerHTML = pokeIMG;
        document.getElementById('name').innerHTML = `<h1>${data.name}<h1>`;
    });