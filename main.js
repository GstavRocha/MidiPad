function tocaSom(idAudio){
// o id não da para ser usado ele deve ser mais generico pois o id é elemento único.
    document.querySelector(idAudio).play();
}
const listaTeclas = document.querySelectorAll('.tecla');
 var contador = 0;
// condicao
// depende de uma condição booleana.
while(contador< listaTeclas.length){
    //rotina
    listaTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_pom');
    }
    contador ++;
    console.log(contador)
}
