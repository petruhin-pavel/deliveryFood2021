// инкапсулирование кода, переменные замкнуты внутри функции
const cart = () => {
  const buttonCart = document.getElementById('cart-button')
  const modalCart = document.querySelector('.modal-cart')
  const close = modalCart.querySelector('.close') // старые методы (как get..) не работают в рамках элемента
  const modalBody = modalCart.querySelector('.modal-body')
  const buttonSend = modalCart.querySelector('.button-primary')

  const resetCart = () => {
    modalBody.innerHTML = ''
    localStorage.removeItem('cart')
    modalCart.classList.remove('is-open')
  }

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))
    cartArray.map((item) => {
      if (item.id === id) {
        item.count++
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }

  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))
    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count > 1 ? item.count - 1 : 1
        /* if (item.count > 1) {
          item.count--
        } else {
          item.count = 1
        } */

      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }

  const renderItems = (data) => {
    modalBody.innerHTML = ''

    data.forEach(({ name, price, id, count }) => {
      const cartElem = document.createElement('div')

      cartElem.classList.add('food-row')

      cartElem.innerHTML = `
          <span class="food-name">${name}</span>
					<strong class="food-price">${price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec" data-index="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc" data-index="${id}">+</button>
					</div>
      `

      // отрабатываем клик по кнопкам +\- (2 способа)
      /* cartElem.querySelector('.btn-dec').addEventListener('click', () => {
        decrementCount(id)
      })

      cartElem.querySelector('.btn-inc').addEventListener('click', () => {
        incrementCount(id)
      }) */

      modalBody.append(cartElem)
    })
  }

  modalBody.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('btn-inc')) {
      incrementCount(e.target.dataset.index)
    } else if (e.target.classList.contains('btn-dec')) {
      decrementCount(e.target.dataset.index)
    }
  })


  buttonSend.addEventListener('click', () => {
    const cartArray = localStorage.getItem('cart')
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: cartArray
    })
      .then(responce => {
        if (responce.ok) {
          resetCart()
        }
      })
  })

  buttonCart.addEventListener('click', () => {
    if (localStorage.getItem('cart')) {
      renderItems(JSON.parse(localStorage.getItem('cart')))
    }
    modalCart.classList.add('is-open')
  })

  close.addEventListener('click', () => {
    modalCart.classList.remove('is-open')
  })
}
cart()
