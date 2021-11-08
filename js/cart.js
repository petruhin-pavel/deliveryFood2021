// инкапсулирование кода, переменные замкнуты внутри функции
const cart = () => {
  const buttonCart = document.getElementById('cart-button')
  const modalCart = document.querySelector('.modal-cart')
  const close = modalCart.querySelector('.close') // старые методы (как get..) не работают в рамках элемента

  buttonCart.addEventListener('click', () => {
    modalCart.classList.add('is-open')
  })

  close.addEventListener('click', () => {
    modalCart.classList.remove('is-open')
  })
}
cart()
