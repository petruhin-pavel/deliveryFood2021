const renderItems = (data) => {
  //console.log(data);
  data.forEach((elem) => {
    console.log(elem);
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
*/