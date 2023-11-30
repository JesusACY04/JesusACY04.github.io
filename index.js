const btnCarro = document.querySelector('.container-icon')
const containerCarroProductos = document.querySelector('.container-carro-productos')

btnCarro.addEventListener('click', () =>{
    containerCarroProductos.classList.toggle('hidden-carro')
})