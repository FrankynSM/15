// Spread operator ...

// let lenguajes = ['JavaScript', 'PHP', 'Python']

// let frameworks = ['ReactJS', 'Laravel', 'Django']
// Unir los arreglos en 1 solo
// let nuevoArreglo = [...lenguajes]
// console.log(nuevoArreglo)

// let [ultimo] = [...lenguajes].reverse()
// con spread
// console.log(lenguajes)
// console.log(ultimo)

function suma(a, b, c) {
 console.log(a + b + c)
}
const numeros = [1, 2, 3]

suma(...numeros)
