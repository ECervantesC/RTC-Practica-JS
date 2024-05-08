// Ejercicio 1
let myFavoriteHero = 'Hulk'
let x = 50
let h = 5
let y = 10
let z = h + y
// Ejercicio 2
const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25
let firstName = 'Jon'
let lastName = 'Snow'
let age = 24
console.log('Ejercicio 2')
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
)
const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }
let totalPrice = toy1.price + toy2.price
console.log('Ambos juguetes cuestan ' + totalPrice)
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
globalBasePrice = 25000
car1.finalPrice = globalBasePrice + car1.basePrice
car2.finalPrice = globalBasePrice + car2.basePrice
// Ejercicio 3
console.log('Ejercicio 3')
console.log('El producto de 10 por 5 es ' + 10 * 5)
console.log('El resultado de dividir 10 entre 2 es ' + 10 / 2)
console.log('El resto de dividir 15 por 9 es ' + (15 % 9))
let p = 10
let j = 5
let o = p - j
let c = 10
let m = 5
let i = c * m
// Ejercicio 4
console.log('Ejercicio 4')
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(`El primer elemento del array avengers es ${avengers[0]}`)
avengers.splice(0, 1, 'IRONMAN')
console.log(`El nuevo primer elemento del array es ${avengers[0]}`)
console.log(`El array Avengers tiene ${avengers.length} elementos`)
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(
  `El ultimo elemento del array rickAndMortyCharacters es ${
    rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
  }`
)
// Añado Lapiz Lopez para tener el array de la descripción
rickAndMortyCharacters.push('Lapiz Lopez')
rickAndMortyCharacters.pop()
console.log(
  `El primer elemento de rickAndMortyCharacters es ${rickAndMortyCharacters[0]}`
)
console.log(
  `El primer elemento de rickAndMortyCharacters es ${
    rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
  }`
)
// Añado Lapiz Lopez para tener el array de la descripción
rickAndMortyCharacters.push('Lapiz Lopez')
rickAndMortyCharacters.splice(1, 1)
console.log(
  `El array rickAndMortyCharacters queda con los siguientes elementos ${rickAndMortyCharacters}`
)
// Ejercicio 5
console.log('Ejercicio 5')
const number1 = 10
const number2 = 20
const number3 = 2
if (number2 / number1 == 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}
if (number3 != number1) {
  console.log('number3 es distinto number1')
}
if (number3 * 5 == number1) {
  console.log('number3 por 5 es igual a number1')
}
if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  )
}
if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  )
}
//Ejercicio 6
console.log('Ejercicio 6')
console.log('Primer bucle del ejercicio 6')
for (let i = 0; i <= 9; i++) {
  console.log(i)
}
console.log('Segundo bucle del ejercicio 6')
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
console.log('Tercer bucle del ejercicio 6')
for (let i = 0; i <= 9; i++) {
  if (i < 9) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('Dormido!')
  }
}
// Ejercicio 7
function sum(numberOne, numberTwo) {
  if (numberOne >= numberTwo) {
    return numberOne
  } else if (numberOne < numberTwo) {
    return numberTwo
  }
}
// Ejercicio 8
console.log('Ejercicio 8')
const avengersNew = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(array) {
  let arrayLength = []
  for (const element of array) {
    arrayLength.push(element.length)
  }
  let maxLength = Math.max(...arrayLength)
  let positionMaxLength = arrayLength.indexOf(Math.max(...arrayLength))
  return array[arrayLength.indexOf(Math.max(...arrayLength))]
}
console.log(`El resultado del ejercicio 8 es ${findLongestWord(avengersNew)}`)
// Ejercicio 9
console.log('Ejercicio 9')
const numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(param) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}
console.log('La suma total es ' + sumAll(numbers))
// Ejercicio 10
console.log('Ejercicio 10')
const numbersEjercicio10 = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let numerador = 0
  for (let i = 0; i < param.length; i++) {
    numerador = numerador + param[i]
  }
  let denominador = param.length
  let promedio = numerador / denominador
  return promedio
}
console.log(`El promedio es ${average(numbersEjercicio10)}`)
// Ejercicio 11
console.log('Ejercicio 11')
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let numeradorEjercicio11 = 0
  let denominadorEjercicio11 = param.length
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      numeradorEjercicio11 += param[i]
    } else {
      numeradorEjercicio11 += param[i].length
    }
  }
  let promedioEjercicio11 = numeradorEjercicio11 / denominadorEjercicio11
  return promedioEjercicio11
}
let resultadoEjercicio11 = averageWord(mixedElements)
console.log(`El resultado del ejercicio 11 es ${resultadoEjercicio11}`)
// Ejercicio 12
console.log('Ejercicio 12')
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  let paramNoDuplicate = [param[0]]
  for (let i = 1; i < param.length; i++) {
    let addElement = true
    for (let ii = 0; ii < paramNoDuplicate.length; ii++) {
      if (param[i] === paramNoDuplicate[ii]) {
        addElement = false
      }
    }
    if (addElement === true) {
      paramNoDuplicate.push(param[i])
    }
  }
  return paramNoDuplicate
}
console.log(`El resultado del ejercicio 12 es ${removeDuplicates(duplicates)}`)
// Ejercicio 13
console.log('Ejercicio 13')
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function findername(array, valor) {
  let result = [false, 0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      result[0] = true
      result[1] = i
      return result
    }
  }
  return result
}
function consoleResultado13(array) {
  if (array[0] === true) {
    console.log(`El resultado es ${array[0]} y está en la posición ${array[1]}`)
  } else {
    console.log(`No está en el array`)
  }
}
console.log('¿está Steve?')
let resultadoEjercicio13 = findername(nameFinder, 'Steve')
consoleResultado13(resultadoEjercicio13)
console.log('¿está Natasha?')
resultadoEjercicio13 = findername(nameFinder, 'Natasha')
consoleResultado13(resultadoEjercicio13)
console.log('¿está Elisa?')
resultadoEjercicio13 = findername(nameFinder, 'Elisa')
consoleResultado13(resultadoEjercicio13)
console.log('¿está 2?')
resultadoEjercicio13 = findername(nameFinder, 2)
consoleResultado13(resultadoEjercicio13)
// Ejercicio 14
console.log('Ejercicio 14')
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let paramNoDuplicates = removeDuplicates(param)
  let resultEjercicio14 = []
  let elementEjercicio14 = {}
  for (let i = 0; i < paramNoDuplicates.length; i++) {
    elementEjercicio14 = {}
    elementEjercicio14.word = paramNoDuplicates[i]
    let counterWords = 0
    for (let j = 0; j < param.length; j++) {
      if (param[j] === elementEjercicio14.word) {
        counterWords++
      }
    }
    elementEjercicio14.repetitions = counterWords
    resultEjercicio14.push(elementEjercicio14)
  }
  return resultEjercicio14
}
console.log(
  'En el siguiente objeto se muestra cuanta veces se repite cada palabra'
)
console.log(repeatCounter(counterWords))
// Ejercicio 15
console.log('Ejercicio 15')
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]
let stringToReview = products[0]
for (let i = 0; i < products.length; i++) {
  stringToReview = products[i]
  if (stringToReview.includes('Camiseta') === true) {
    console.log(
      'El elemento ' +
        i +
        ' del array es ' +
        stringToReview +
        ' e incluye Camiseta'
    )
  }
}
// Ejercicio 16
console.log('Ejercicio 16')
const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]
for (const element of placesToTravel) {
  console.log(element)
}
// Ejercicio 17
console.log('Ejercicio 17')
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (const key in alien) {
  console.log(alien[key])
}
// Ejercicio 18
console.log('Ejercicio 18')
const placesToTravelEjercicio18 = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
const resultadoEjercicio18 = []
for (const key in placesToTravelEjercicio18) {
  if (
    placesToTravelEjercicio18[key].id !== 11 &&
    placesToTravelEjercicio18[key].id !== 40
  ) {
    resultadoEjercicio18.push(placesToTravelEjercicio18[key])
  }
}
console.log('El resultado del ejercicio 18 es')
console.log(resultadoEjercicio18)
// Ejercicio 19
console.log('Ejercicio 19')
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
const resultadoEjercicio19 = []
let includesGato = false
for (const key in toys) {
  includesGato = toys[key].name.includes('gato')
  if (includesGato === false) {
    resultadoEjercicio19.push(toys[key])
  }
}
console.log('El resultado del ejercicio 19 es')
console.log(resultadoEjercicio19)
// Ejercicio 20
console.log('Ejercicio 20')
const toysEjercicio20 = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
let popularToys = []
for (const element of toysEjercicio20) {
  if (element.sellCount >= 15) {
    popularToys.push(element)
  }
}
console.log(popularToys)
// Ejercicio 21
console.log('Ejercicio 21')
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
let mayoresEdadEjercicio21 = []
let menoresEdadEjercicio21 = []
for (const element of users) {
  if (element.years >= 18) {
    mayoresEdadEjercicio21.push(element)
  } else {
    menoresEdadEjercicio21.push(element)
  }
}
console.log('Los mayores de edad son')
console.log(mayoresEdadEjercicio21)
console.log('Los menores de edad son')
console.log(menoresEdadEjercicio21)
// Ejercicio 22
console.log('Ejercicio 22')
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
for (const key in foodSchedule) {
  if (foodSchedule[key].isVegan === false) {
    foodSchedule[key].name = fruits.shift()
    foodSchedule[key].isVegan = true
  }
}
console.log(foodSchedule)
// Ejercicio 23
console.log('Ejercicio 23')
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
console.log(movies)
let smallMovieEjercicio23 = []
let mediumMovieEjercicio23 = []
let largeMovieEjercicio23 = []
for (const element of movies) {
  if (element.durationInMinutes < 100) {
    smallMovieEjercicio23.push(element)
  } else {
    if (element.durationInMinutes >= 100 && element.durationInMinutes < 200) {
      mediumMovieEjercicio23.push(element)
    } else {
      largeMovieEjercicio23.push(element)
    }
  }
}
console.log('Las peliculas pequeñas son ')
console.log(smallMovieEjercicio23)
console.log('Las peliculas medianas son ')
console.log(mediumMovieEjercicio23)
console.log('Las peliculas largas son ')
console.log(largeMovieEjercicio23)
// Ejercicio 24
console.log('Ejercicio 24')
const productsEjercicio24 = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
let resultEjercicio24 = 0
for (const key in productsEjercicio24) {
  resultEjercicio24 += productsEjercicio24[key].sellCount
}
console.log(`El resultado del ejercicio 24 es ${resultEjercicio24}`)
// Ejercicio 25
console.log('Ejercicio 25')
let resultadoEjercicio25 = 0
for (const element of productsEjercicio24) {
  resultadoEjercicio25 += element.sellCount
}
resultadoEjercicio25 = resultadoEjercicio25 / productsEjercicio24.length
console.log(`El resultado del ejercicio de ${resultadoEjercicio25}`)
// Ejercicio 26
console.log('Ejercicio 26')
const goodProducts = []
const badProducts = []
const productsEjercicio26 = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
for (const key in productsEjercicio26) {
  if (productsEjercicio26[key].sellCount >= 20) {
    goodProducts.push(productsEjercicio26[key])
  } else {
    badProducts.push(productsEjercicio26[key])
  }
}
console.log('Los buenos productos son ')
console.log(goodProducts)
console.log('Los malos productos son ')
console.log(badProducts)
