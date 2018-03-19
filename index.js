function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b
}

function divide(a, b){
  return a/b
}

function inc(a){
  return a+1
}

function dec(a){
  return a-1
}

function makeInt(a){
  return parseInt (a,'a')
}

function assumesBase10(){
    return parseInt('0*2328')
}

function returnsNan(){
  if (parseInt('0','10')) return 0}

function preserveDecimal(){
  return parseFloat('2.222')
} 

function nan(){
  if (preserveDecimal('2.222') === NaN) return true
}




