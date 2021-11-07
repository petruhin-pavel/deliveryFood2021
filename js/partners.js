const cardsRestaurants = document.querySelector('.cards-restaurants');

const renderItems = (data) => {
  data.forEach((item) => { // data.forEach(({ image, kitchen, name, price, products, stars, time_of_delivery }) => {
    const { image, kitchen, name, price, products, stars, time_of_delivery } = item
    const a = document.createElement('a')


    a.setAttribute('href', '/restaurant.html')
    a.classList.add('card')
    a.classList.add('card-restaurant')
    a.dataset.products = products

    a.innerHTML = `
    <img src="${image}" alt="${name}" class="card-image" />
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title">${name}</h3>
					<span class="card-tag tag">${time_of_delivery} мин</span>
				</div>
				<div class="card-info">
					<div class="rating">
						${stars}
					</div>
					<div class="price">От ${price} ₽</div>
					<div class="category">${kitchen}</div>
				</div>
			</div>
    `
    // отменили переход по ссылке, записали данные в локальное хранилище и перешли по ссылке
    a.addEventListener('click', (Event) => {
      Event.preventDefault()

      localStorage.setItem('restaurant', JSON.stringify(item))

      window.location.href = '/restaurant.html'

    })

    cardsRestaurants.append(a)
  })
}

fetch('./db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error);
  })





/*
=== методы перебора данных ===
const array = [11, 34, 67, 789, 45]

цикл for (переменная i; условие; действие)
array.length - получить длину массива

for (let i = 0; i < array.length; i++) {
  console.log(i); - длина массива
  console.log(array[i]); - содержимое массива
}

Метод forEach()
принимает аргумент в виде функции (callback функция)
array.forEach(function (elem, index, array) {
  console.log(elem);
  console.log(index);
  console.log(array);
})

 аналог на стрелочной функцие
array.forEach((elem)=>{
  console.log(elem);
})
*/
/*
const array = [11, 34, 67, 789, 45]

только если index меньше 2 иначе 'не подходит'
array.forEach((elem, index) => {
  if (index < 2) {
    console.log(elem);
  } else {
    console.log('не подходит');
  }
})
 */
/*метод fetch для работы с серверными запросами
then - метод получения данных
fetch('./db/partners.json')
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  }) */

/*
Метод catch() может обработать ошибку 404 от сервера
.catch((error)=>{
    console.log(error);
  })

Метод finally() отработает в любом случае, успех\ошибка
.finally(console.log('finally'))
Метод createElement() создает объект\тег но не выводит его (держит в памяти)
const a = document.createElement('a')
console.log(a);
Метод setAttribute() позволяет работать с атребутами элементов\тегов
a.setAttribute('href', '/restaurant.html') - добавляет атребут
a.getAttribute('href') - возвращает значение атребута
a.hasAttribute('href') - возвращает булевое значение, существует ли данный атребут у элемента\тега
*/
/*
Свойство classList позволяет работать с классами
letORconst.classList.add('new-class') - добавление класса
letORconst.classList.remove('new-class') - удаление класса
letORconst.classList.toggle('new-class') - если данный клас не найден - добавляет класс, если найден - удаляет
 */
/*
Свойство innerHTML
a.innerHTML = "<span>Это некий контент</span>"
*/
/*
Деструктуризация позволяет обращаться к свойствам объекта напрямую {перечисление свойств элемента}
const {image, kitchen, name, price, products, stars, time_of_delivery} = item

*/
/*
.dataset свойство позволяющее работать с дата атребутами
a.dataset.products = products
*/
/* Добавление верстки
cardsRestaurants.append(a) */