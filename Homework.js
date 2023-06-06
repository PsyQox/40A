function BinarioADecimal(num) {
   // escriben aca el codigo
  //Las operaciones comienzan de manera inverza al decimal dado esa es la razon del reverse()
  let BinarioInvertido = num.split('').reverse();
  let Acumulador = 0; 
  for(let i = 0; i < num.length; i++){
   //Operacion para sacar el decimal
    Acumulador = Acumulador + (BinarioInvertido[i]*Math.pow(2, i)); 
  }
  return Acumulador;
}

function DecimalABinario(num) {
   let Decimal = num;
  let ArrayB = [];
  while(Decimal >= 1){
    //Aqui se agrega el resto a un nuevo array, de manera invertida
    ArrayB.unshift(Decimal % 2) 
    //Aqui se hace la division redondeando a lo menor 
    Decimal= Math.floor((Decimal/2));   
  }
  //Como es un arreglo, hay que unirlo.
  return ArrayB.join("")
}

// Solucion del Instructor

function BinarioADecimalI(num){
    //Escribir aca el codigo "num"> "1100"
    var array = num.split(""); //Separa dependiendo el caracter, en esta caso espacio vacio
    // ["1","1","0","0"]
    var decimal = 0;
    for (let i = 0; i < array.length; i++) {
        decimal = decimal +  array[i] * Math.pow(2, array.length - 1 - i);
        //Alternativas 
        // decimal += array[i] * 2 ** (array.length -1 -i)
    }
    return decimal;
}
console.log("Result", BinarioADecimalI("11011"))
// Binario "1 0 0 1"
// //       3 2 1 0
// Potencia 2 2 2 2
// Resultado 8 4 2 1
// Valido 8 + 0 + 0 + 1= 9

//decimal = 0
//Binario "1100"
//         i
//Decimal = decimal + 2** 3 * 1

//Binario ["1","1","0","0"]

function DecimalABinarioI(num){
    if(num <= 0 ){
        return num;
    }
    //Alternativa
    //if(num <= 0) return num;
    // var binario = []
    var binario = "";

    // while(num > 0){
    //     binario.unshift(num%2); //guarda el Resto
    //     num = Math.floor(num/2) //El numero redondeado hacia abajo con floor
    // }
    // // ["1","1,","0","1","1"].join("") > "11011"
    // return binario.join("")   

    while (num > 0) {
            binario = (num % 2) + binario; //Funciona porque solo los strings se concatenan La COHERCION DE DATOS
            num = Math.floor(num / 2);
    }
    return binario
}

console.log(DecimalABinarioI(27))
// "27" > "11011"
// 27 / 2 = 13,5 > Math.floor(Redondea hacia abajo) > Math.trunk(Devuelve la parte entera)
// 27 % 2 = 1;
// Repito


//git init para indicar que la carpeta tendra conexion a un repositorio