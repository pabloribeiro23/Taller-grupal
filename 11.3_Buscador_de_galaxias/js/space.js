let input = document.getElementById("inputBuscar")

const searchBtn = document.getElementById("btnBuscar")
const container = document.getElementById("contenedor")



searchBtn.addEventListener("click", ()=> {

    let API_URL = `https://images-api.nasa.gov/search?q=${input.value}`

    container.innerHTML = ""

    fetch (API_URL)
.then(response => response.json())
.then( data=>{

    let length = data.collection.items.length

    for(let i=0; i<=length; i++){
        
        container.innerHTML+=
        `<div class="card">
        <img src=${data?.collection.items[i].links[0].href}>
        <p>${data?.collection.items[i].data[0].title}</p>
        <p>${data?.collection.items[i].data[0].description}</p>
        <p>${data?.collection.items[i].data[0].date_created}</p>
        </div>`
    } 

})
.catch(error => (console.error("Error en el fetch", error)))
})

