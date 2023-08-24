
let botonAgregar = document.getElementById("agregar")
let contenedor = document.getElementById("contenedor")
let limpiar = document.getElementById("limpiar")
let listaItem = JSON.parse(localStorage.getItem("listaItem")) || []; 

document.addEventListener("DOMContentLoaded", (event) => {
    actualizarContenedor(listaItem)
    
});





botonAgregar.addEventListener("click", ()=> {
    // esto funciona por gracia divina, crea un array y lo llena con el contenido del input, NO TOCAR
    let input = document.getElementById("item").value
    listaItem.push(input)
    let valores = JSON.stringify(listaItem)
    console.log(input)
    localStorage.setItem('listaItem', valores )
    console.log(localStorage)
    
    
    // muestra la lista en pantalla
    
    actualizarContenedor(listaItem)
    document.getElementById("item").value = "";

})


function actualizarContenedor(array) {
    contenedor.innerHTML = "";
 array.forEach(element => { 
    contenedor.innerHTML += `<li>${element} </li>`
    
 });
}

limpiar.addEventListener("click", ()=>{
    localStorage.removeItem('listaItem')
    contenedor.innerHTML=""
     listaItem = []
})