export async function getImages(){
    let imageArray = [];


    for (let i = 1; i < 10; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`,{mode: 'cors'})
        const data = await response.json();
        imageArray.push({name:data.name,img:data.sprites.back_default,sound:new Audio(data.cries.latest)})
    }
    return imageArray;

}