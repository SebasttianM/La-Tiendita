import getData from "./getData.js"
import showData from "./showData.js"

const urlProducts= 'https://api-prueba-productos.herokuapp.com/productos'

const productosContenedor = document.getElementsByClassName('productosContenedor')
const card = document.querySelector('.card');

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    const data =getData(urlProducts);
    showData(data, card)
})