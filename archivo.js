


// function DecimalABinario(num) {
  
//     while (num>0) {
        
//     }
// }

// console.log(13 % 2);
// console.log(14/2);

// function BinarioADecimal(num) {
//   // escriben aca el codigo
//   //101100
//   var array = String(num).split('').reverse();
//   let resultado;

//   for (let i = 0; i < num.length; i++) {
//     if(array[i] == 1){
//       resultado = resultado + Math.pow(2, i);
//     }
//     // let acumulador = (numero[i]*(Math.pow(2, i)));
//     //  resultado = resultado + acumulador;
//   }
//   return resultado
// }
function BinarioADecimal(num){
   let BinarioInvertido = String(num).split('').reverse();
   let Acumulador = 0; 
   for(let i = 0; i < num.length; i++){
     Acumulador = Acumulador + BinarioInvertido[i]*Math.pow(2, i); 
   }
   return Acumulador;
}



function DecimalABinario(num) {
  let Decimal = num;
  let ArrayB = [];
  while(Decimal >= 1){
    ArrayB.unshift(Decimal % 2)
    Decimal= Math.floor((Decimal/2));
  }
  return ArrayB.join("")
}

console.log(DecimalABinario(123));
// DeepL Traductor CTRL + CC