// En primer lugar, crearemos una función que obtendrá las entradas del botón.

function getInputValue(){
    let input = event.target.innerText
    console.log(input);
    printValue(input);
}


//para evitar el onclick en cada boton, obtendremos el botón por su nombre de etiqueta y luego usaremos un bucle para agregar a cada botón el atributo onclick como este.


let buttons = document.getElementsByTagName('button');
console.log(buttons.length);
for(var i =0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');
}

//ahora haremos que nuestra función de salida imprima el texto dentro de nuestro campo de resultado.

function printValue(val){
    let out = document.querySelector("#result");
    let current = out.innerHTML;
    if(out.innerHTML == "0"){
      
      if(val!= "C" && val!="DEL"){ 
        out.innerHTML ="";
        out.innerHTML += val;
      }
    }
    else{
      if(val == "DEL" ){
        console.log(current[current.length-1]);
        out.innerText = current.slice(0,-1);
        if(out.innerHTML.length <= 1){
          out.innerHTML = "0";
        }
      }
      if(val!= "C" && val!="DEL" && val!="="){ 
        out.innerHTML += val;
      }
      if(val =="="){
        let res = out.innerHTML;
        out.innerHTML = eval(res);
      }
      if(val == "C"){
        out.innerHTML = "0";
      }
    }
    
  }
  