const arr = [1, 2, 3, 4, 5, 6]
var [x, ...y] = arr 

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


function soma(...nums) {
  return nums.reduce((a,b) => a + b)
}
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

 var usuario2 = {...usuario, nome: 'Gabriel'}
 const usuario3 = {...usuario, endereco: { ...usuario.endereco, cidade: "Lontras" }
};
 console.log(usuario2)
 console.log(usuario3)