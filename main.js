function tocaSom(idAudio){
// PAREI EM MELHORANDO O CÓDIGO
    // o id não da para ser usado ele deve ser mais generico pois o id é elemento único.
   const elemento = document.querySelector(idAudio);
   if(elemento === null){
       alert('Elemento não encontrado');
   }else if(elemento.localName === 'audio') {

       elemento.play();
   }
   // usar o mozila para analizar um objeto JS
}
const listaTeclas = document.querySelectorAll('.tecla');
// condicao
// depende de uma condição booleana.
for(let contador = 0; contador < listaTeclas.length; contador++){
    //rotina
    //Template String.
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`



    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    //console.log(contador)
    tecla.onkeydown = function (event){

      if(event.code === 'Enter' || event.code === 'Space' ) {
          tecla.classList.add('ativa');
      }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
