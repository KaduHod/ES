// Lista linear sequencial 2
/*
- Otimização da busca por elementos
- MUdança na ordem de inserção dos elementos

*/
//NAO SEI REPLICAR O COMPORTAMENTO DE C NESTA AULA! :(

class reg{
  constructor(max){
    this.arranjo = []
    this.Nelementos = 0
    this.MAX = max
  }
  print(){
    console.log(this)
  }
}

function print(l){
  if(l.Nelementos == 0) {console.log('Lista vazia!'); return}
  for(let i = 0; i < l.Nelementos; i++) console.log(l.arranjo[i])
}

function insere(l, i, chave){
  if(i > (l.MAX - 1) || i < 0 || i > l.Nelementos) {console.log('Indice inválido!'); return}
  for(let j = l.Nelementos; j > i; j--) l.arranjo[j] = l.arranjo[j-1]

  l.arranjo[i] = chave
  l.Nelementos++
}

function busca(l, chave){
  let i = 0
  while(i < l.Nelementos){
    if(i > l.MAX) return -1
    if(l.arranjo[i] == chave) return i
    i++
  }
}

function exclui(l, chave){
  pos = busca(l, chave)
  if(pos == undefined || pos == null){console.log('Chave inválida!'); return}
  for(let i = pos; i < l.Nelementos; i++){
    if(l.arranjo[i+1] == (null || undefined)) l.arranjo[i] = null
    else l.arranjo[i] = l.arranjo[i+1]
  }
  l.Nelementos--
}

function buscaSentinela(l, chave){
  let i = 0
  let list_auxiliar = new reg(l.MAX)
  list_auxiliar.arranjo = l.arranjo
  list_auxiliar.arranjo[l.Nelementos] = chave

  list_auxiliar.print()
  l.print()

  while(list_auxiliar.arranjo[i] != chave) i++

  if(i == l.Nelementos) {console.log('Chave não está na lista'); return false}
  else return i

  return
}
function reinicializaLista(l){

  return new reg(l.MAX)
  //for(let i = l.Nelementos; i >= 0; i-- ) exclui(l, l.arranjo[i])
}

let lista = new reg(50)
insere(lista, 0, 2)
insere(lista, 1, 3)
insere(lista, 2, 4)
insere(lista, 3, 5)
insere(lista, 4, 6)

// for(let i = 0; i < 50; i++){
//   console.log(i)
// }
//exclui(lista, 103)
//lista = reinicializaLista(lista)
//console.log(buscaSentinela(lista, 7))
buscaSentinela(lista, 7)
lista.print()
