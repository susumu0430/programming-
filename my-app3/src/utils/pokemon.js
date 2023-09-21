

export const getAllPokemon =(url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((res) => res.json()).then((deta)=> resolve(deta));

    })
}

export const getPokemon = (url) => {
    return new Promise((resolve, reject) =>{
        fetch(url).then((res) => res.json()).then((deta) => { 
             resolve(deta);});
    })
}