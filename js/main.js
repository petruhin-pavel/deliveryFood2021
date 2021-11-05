const buttonAuth = document.querySelector('.button-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const login = (user) => {
  buttonAuth.style.display = 'none'

  buttonOut.style.display = 'flex'
  userName.style.display = 'flex'

  userName.textContent = user.login

  modalAuth.style.display = 'none'
}

const logout = () => {
  buttonAuth.style.display = 'flex'

  buttonOut.style.display = 'none'
  userName.style.display = 'none'

  userName.textContent = ' '

  localStorage.removeItem('user')
}

const validateForm = () => {
  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }

  localStorage.setItem('user', JSON.stringify(user))

  if (inputLogin.value == ''){
    //alert('Введите Ваш логин')
    inputLogin.placeholder = 'Введите Ваш логин'
    inputLogin.style.border = '1px solid red'
  }else if (inputPassword.value == ''){
    inputPassword.placeholder = 'Введите Ваш пароль'
    inputPassword.style.border = '1px solid red'
    inputLogin.style.border = '1px solid black'
  } else {
    login(user);
  }
}


buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
  logout()
})

logInForm.addEventListener('submit', (event) => {
  event.preventDefault()

  /* const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }

  localStorage.setItem('user', JSON.stringify(user)) */

  

  validateForm();
  //login(user);
})

if (localStorage.getItem('user')){
  login(JSON.parse(localStorage.getItem('user')));
}





  /* === Function declaration ===
  function sayMeow() {
    console.log('Meow');
  }
  sayMeow() */

  /* === Function expression ===
  const sayMeow = function () {
    console.log('Meow');
  }
  sayMeow() */

  /* === Arrow function ===
  const sayMeow = () => {
    console.log('Meow');
  }
  sayMeow() */

  /* === Object ===
  const obj = {
    name: 'Pavel',
    age: 30,
    sayHello: function () {
      console.log('Hello, my name is Pavel');
    }
  }
  
  console.log(obj.name);
  console.log(obj.age);
  obj.sayHello();
  
  Метод принадлежит объекту. Свойство хранит обычное значение, а метод хранит функцию. */

  /* === Array ===
  const arr = [1, 2, 3, 4, 5]
  
  console.log(arr[0]); */

  /* === Аргументы (параметры) (a, b) функции ===
  
  const counter = (a, b) => {
    return a + b
  }
  
  console.log(counter(2, 3)); */

  /* === События ===
  Пример! Событие по клику, передаем 2 параметра, 1й клик, 2й функция
  buttonAuth.addEventListener('click', () => { console.log('click') })
  
  Пример! Событие отправка формы (submit). Event - то событие, которое произошло на элементе.
  event.preventDefault() - метод отменяющий стандартное поведение элементов.
  
  logInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('submit') })
  */

  /* === localStorage ===
  Пример! Присваиваем 2 элемента 'значение', объект
  localStorage.getItem - получает значение
  localStorage.setItem('user', user) - записывает значение
  localStorage.removeItem - удаляет значение
  */

  /* === Объект JSON ===
  Методы JSON
  JSON.stringify(user) - для перевода объекта в строку
  JSON.parse - для перевода строки в объект
  */