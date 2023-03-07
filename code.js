selecionapoke((Math.random() * 1010).toFixed(0));

const submitform = document.getElementById('submitbutton');
const randombutton = document.getElementById('randombutton');
var numeroid = document.getElementById('inumber');

submitform.addEventListener('click',()=>{
    itens.innerHTML = "";
    numeroid = document.getElementById('inumber');
    selecionapoke(numeroid.value);
})

numeroid.addEventListener('keypress',(event)=>{
    if (event.key === "Enter") {
        itens.innerHTML = "";
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        submitform.click();
      }
})

randombutton.addEventListener('click',()=>{
    itens.innerHTML = "";
    selecionapoke((Math.random() * 1010).toFixed(0));
})

var nomePokemon = document.querySelector('.name');
var idPokemon = document.querySelector('.numberid');
var imagemPokemon = document.querySelector('.imagempoke');
// imagemPokemon.setAttribute('src', 'outra_imagem.png');
var itens = document.querySelector('.items');
var nomeitem1 = document.querySelector('.itemname1');
var nomeitem2 = document.querySelector('.itemname2');
var imgitem1 = document.querySelector('.itemimg1');
var imgitem2 = document.querySelector('.itemimg2');
//imgitem1.setAttribute('src', 'outra_imagem.png');

function selecionapoke(numero) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + numero)
    .then(response => response.json())
    .then(selectedpokemon => {
        
        // console.log(selectedpokemon.name);
        // console.log(selectedpokemon.id);
        // console.log(selectedpokemon.sprites.other["official-artwork"].front_default);

        // console.log(selectedpokemon.held_items[0].item.name);

        nomePokemon.innerHTML = selectedpokemon.name;
        idPokemon.innerHTML = selectedpokemon.id;
        imagemPokemon.setAttribute('src', selectedpokemon.sprites.other["official-artwork"].front_default);
        for (let i = 0; i < selectedpokemon.held_items.length; i++) {
            fetch(selectedpokemon.held_items[i].item.url)
            .then(response => response.json())
            .then(itemsingle => {
                itens.innerHTML += `
                <div class="item item`+i+`">
                    <p class="itemname itemname`+i+`">`+itemsingle.name+`</p>
                    <img class="imgitem itemimg`+i+`" src=`+itemsingle.sprites.default+` alt="">
                </div>
                `;
                console.log(itemsingle.sprites.default);
        })
            
        }

        

        // if (selectedpokemon.held_items.length > 0) {
        //     var i = 0;
        //     while (i < selectedpokemon.held_items.length) {
        //         fetch(selectedpokemon.held_items[i].item.url)
        //         .then(response => response.json())
        //         .then(itemsingle => {
        //             i++;
        //             items.innerHTML += `
        //         <div class="item item`+i+`">
        //             <p class="itemname itemname`+i+`">`+itemsingle.name+`</p>
        //             <img class="imgitem itemimg`+i+`" src=`+itemsingle.sprites.default+` alt="">
        //         </div>
        //         `;
        //     })}
        // } else {
        //     console.log("teste")
        // }


    })
}