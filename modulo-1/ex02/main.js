const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];
 
var ages = usuarios.map(function (item) {
  return item.idade
})
console.log(ages)

var filter = usuarios.filter(function(item) {
  return item.idade > 18 && item.empresa === 'Rocketseat'
})
console.log(filter)

var find = usuarios.find(function(item){
  return item.empresa === 'Google'
})
console.log(find)

var newusers = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2}))
  .filter(usuario => usuario.idade <= 50)
console.log(newusers)


 const promise = () => new Promise((resolve, reject) => resolve());