export async function getImages(){
    let imageArray = [];


    for (let i = 1; i < 10; i++) {
        let random = getRandomInt(1,100);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`,{mode: 'cors'})
        const data = await response.json();
        imageArray.push({name:data.name,img:data.sprites.back_default,sound:new Audio(data.cries.latest)})
    }
    return imageArray;

}
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}