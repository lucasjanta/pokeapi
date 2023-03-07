
const submitform = document.getElementById('submitbutton');
const randombutton = document.getElementById('randombutton');

submitform.addEventListener('click',()=>{
    var numeroid = document.getElementById('inumber');
    selecionapoke(numeroid.value);
})

randombutton.addEventListener('click',()=>{
    selecionapoke((Math.random() * 1281).toFixed(0));
})



function selecionapoke(numero) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + numero)
    .then(response => response.json())
    .then(selectedpokemon => {
        console.log(selectedpokemon.name);
    })
}