function verificarNumeroPrimo(n){
  var divisores=0;

  for(var count=1 ; count<=n ; count++)
   if(n % count == 0)
    divisores++;

  if(divisores==2)
    return true;
  else
    return false;
}

console.log(verificarNumeroPrimo(0)); 
console.log(verificarNumeroPrimo(1)); 
console.log(verificarNumeroPrimo(2)); 
console.log(verificarNumeroPrimo(3)); 
console.log(verificarNumeroPrimo(7)); 
console.log(verificarNumeroPrimo(83)); 
console.log(verificarNumeroPrimo(100)); 
console.log(verificarNumeroPrimo(991)); 
console.log(verificarNumeroPrimo(104729)); 
console.log(verificarNumeroPrimo(14348907)); 
