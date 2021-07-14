// Busca binaria
//Inserção Ordenada
class reg{
  constructor(max){
    this.arranjo = []
    this.Nelementos = 0
    this.MAX = max
  }
  print(){console.log(this)}
  add(chave){
    insercaoOrdenada(this, chave)
  }

  exclui(chave){
    exclusao(this, chave)
  }

  binarySearch(chave){
    console.log('Valor está no índice: ')
    return buscaBinaria(this, chave)
  }
}

function insercaoOrdenada(l, chave){
  if(l.Nelementos >= l.MAX) return false
  let pos = l.Nelementos

  while(pos > 0 && l.arranjo[pos-1] > chave){
    l.arranjo[pos] = l.arranjo[pos-1]
    pos--
  }

  l.arranjo[pos] = chave
  l.Nelementos++
  return
}

function buscaBinaria(l, chave){
  let dir = l.Nelementos - 1
  let esq = 0

  while(esq <= dir){
      let meio = parseInt((dir + esq)/ 2)
      if(chave == l.arranjo[meio]) return meio
      else {
        if(l.arranjo[meio] < chave) esq = (meio + 1)
        else dir = (meio - 1)
      }
  }
}

function exclusao(l, chave){
  pos = buscaBinaria(l, chave)
  if(pos === undefined || pos == null) return false
  for(let i = pos; i < l.Nelementos; i++){
    if(i == l.Nelementos - 1) l.arranjo[i] = null
    else l.arranjo[i] = l.arranjo[i+1]
  }
  l.Nelementos--

}

/*insercaoOrdenada(listaOrdenada, 10)
insercaoOrdenada(listaOrdenada, 0)
insercaoOrdenada(listaOrdenada, 502)
insercaoOrdenada(listaOrdenada, 530)
insercaoOrdenada(listaOrdenada, 540)
insercaoOrdenada(listaOrdenada, 250)
insercaoOrdenada(listaOrdenada, 150)
console.log(buscaBinaria(listaOrdenada, 530), 530)
console.log(buscaBinaria(listaOrdenada, 540), 540)
console.log(buscaBinaria(listaOrdenada, 10), 10)
console.log(buscaBinaria(listaOrdenada, 0), 0)
console.log(buscaBinaria(listaOrdenada, 500), 500)
exclusao(listaOrdenada, 540)
exclusao(listaOrdenada, 250)
exclusao(listaOrdenada, 150)
exclusao(listaOrdenada, 502)
/exclusao(listaOrdenada, 250)
exclusao(listaOrdenada, 0)
exclusao(listaOrdenada, 502)*/


module.exports = reg
