// cada dado ocupa um espaço vizinho na memoria assim como um array!

/*
- Inicializar estrutura
- Retornar a quantidade de elementos validos{
      - Colocar zero no numero de elementos.

}
- Exibir os elementos da estrutura
- Buscar por um elemento na estrutura
- Inserir elementos na estrutura
- Excluir elementos na estrutura
- Reinicializar a estrutura
*/

// Para excluir e reinicializar a lista precisei alterar o codigo mostrado na video aula da fuvest. N aula o conteudo é aprexentado com a liguagem C, onde, a inguagem aloca um espaço de memoria para cada variavel. Já no javaScript isto não acontece entao para exclui um valor do arranjo da lista foi necessário declarar o valor da estrutura como null.

const MAX = 50 //Número máximo de elementos do arranjo

class Registro {// tipo de dado armazenado na nossa lista linear
  constructor(){
    this.arranjo = []
    this.Nelementos = 0
  }
  print(){
    console.log(this)
  }
}

function exibirLista(l){
  console.log('\n --Lista-- ')
  for(i=0; i < l.Nelementos; i++){
    console.log(`\n ${l.arranjo[i]}`)
  }
  console.log('\n ---FIM LISTA---')
}

function busca(l, chave){
  let i = 0
  while(i < l.Nelementos){
    if(i > MAX) return -1
    if(l.arranjo[i] == chave) return i
    else i++
  }
}

function insere(l, i, chave){
  if(l.Nelementos >= MAX - 1 || i < 0 || i > l.Nelementos) { console.error('\n Indíce invalido!') ;return false }
  for(j = l.Nelementos; j > i; j--) l.arranjo[j] = l.arranjo[j-1]
  l.arranjo[i] = chave
  l.Nelementos++
  return l
}

function exclui(l, chave){
  pos = busca(l, chave)
  if(pos == undefined || pos == null) { console.error('\n Chave inexistente!\n Caso esteja reinicializando a lista, desconsidere está mensagem!'); return false }

  for(let i = pos; i < l.Nelementos; i++){
    if (l.arranjo[i+1] == undefined)  l.arranjo[i] = null
    else l.arranjo[i] = l.arranjo[i+1]
  }

  l.Nelementos--
}

function reinicializaLista(l){

  return new reg(l.MAX)
  //for(let i = l.Nelementos; i >= 0; i-- ) exclui(l, l.arranjo[i])
}




var lista = new Registro()
for(let i = 0; i < 10; i++){
  let cont = i*2
  insere(lista, i, cont)
}
reinicializaLista(lista)
lista = reinicializaLista(l)




exibirLista(lista)
