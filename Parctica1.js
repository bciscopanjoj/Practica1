var arr = [];

function mostrarHistorial(text){
    var texto;
    arr.push(text);
      for (var i = arr.length-1; i >= 0; i--) {
        texto+= "<h5>"+arr[i]+ "<h5>";
      }
	document.getElementById("palabra").innerHTML =texto;
}
  function analizar(){
    var text = null;
    text = document.getElementsByName("prod")[0].value;

      if(text == ""){
          alert("Por favor ingrese texto en la entrada");
      }else{
        if(esNumero(text)){
            alert("son numeros");
        }else if(esSimbolo(text)){
            alert("son simbolos");
        }else if(esId(text)){
            alert("Es un id");
        }else{
            alert("Es un error");
        }
        mostrarHistorial(text);
      }
  };
  function esNumero(text){
    var result=false;
    for(i=0; i<text.length; i++){//recoremos el texto
      var num1=text[i];
      if(!isNaN(num1)){
          result=true;
      }else{
          result=false;
          break;
      }
    }
    return result;
  };
  function esSimbolo(text){
    var result=false;
    for(i=0; i<text.length; i++){//recoremos el texto
      var num1=text[i];
      if(num1=="$"||num1=="%"||num1=="#"){
          result=true;
      }else{
          result=false;
          break;
      }
    }
    return result;
  };
  function esId(text){
    var result=false;
    var letras="abcdefghyjklmnñopqrstuvwxyz";
    var letrasNum="abcdefghyjklmnñopqrstuvwxyz0123456789";
    var texto = text.toLowerCase();
    if (letras.indexOf(texto.charAt(0),0)!=-1){
       for(i=1; i<texto.length; i++){
         if (letrasNum.indexOf(texto.charAt(i),0)!=-1){
            result = true;
         }else{
            result = false;
            break;
         }
       }
    }else{
      result= false;
    }
      return result;
  };

