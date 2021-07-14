// LIsta ligada!!!

// elementos estao espalhados pela memoria
class No {
  constructor(dado){
    this.dado = dado
    this.ponteiro = null
  }

  print(){
    if(this){
      console.log('=== Inicio lista ===')
      let atual = this
      while(atual){
        console.log(atual.dado)
        atual = atual.ponteiro
      }
      console.log('=== Fim lista ===')
    }else console.log('Lista vazia!')

  }

  add(new_node){
    insereLLOR(this, new_node)
  }
  search(key){
    busca(this, key)
  }
}



function insereLLOR(head, prox){
  if(!head.ponteiro){// insere no segundo indice
    if(head.dado > prox.dado){
      head.ponteiro = prox
      return head
    }
  }
  // if(prox.dado > head.dado){// insere no primeiro indice
  //   prox.ponteiro = head
  //   return prox
  // }
  if(prox.dado > head.dado){// insere no primeiro indice
    head_auxiliar = {
      dado: head.dado,
      ponteiro: head.ponteiro
    }
    head.dado = prox.dado
    head.ponteiro = head_auxiliar


    return head


  }
  let anterior = null
  let atual = head
  while (atual.ponteiro != null) {
    anterior = atual // anterior = 80, 50
    atual = atual.ponteiro // atual = 50, null
    if(atual.dado < prox.dado){
      break;
    }
  }
  if(atual.dado < prox.dado){//anterior = 50, atual = 1, prox = 2
    anterior.ponteiro = prox
    prox.ponteiro = atual
  }else{
    atual.ponteiro = prox
  }
  return head
}

function busca(head, chave){
  try {
    if(head.dado == chave){
      console.log('========= Chave no indice 0! =========')
      return head
    }else{
      let atual = head
      while(atual.ponteiro.dado != chave) atual = atual.ponteiro
      console.log(atual, '========= Chave solicitada é o ponteiro! =========')
      return atual
    }
  } catch (e) {
    console.log('========= Chave não está na lista! =========')
  }
}

// let head = new No(50)
//  let no0 = new No(10)
//  let no1 = new No(20)
//  let no2 = new No(130)
//
// head.add(new No(35))
// for(i=0; i<100; i++){
//   head.add(new No(Math.floor(Math.random()*10)))
// }
// // head = insereLLOR(head ,no0)
// // head = insereLLOR(head ,no1)
// // head = insereLLOR(head ,no2)
// head.print()
// console.log(head)
// head.search(10)



module.exports = No
