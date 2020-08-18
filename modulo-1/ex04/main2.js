const usuario = { nome1: 'Breno', idade:26};
const {nome1, idade} = usuario;

function mostraInfo() {
  return `${nome1} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario))

