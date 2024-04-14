function isPrime(num) {
  if(num === 0 || num === 1) return false; 
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0) return false; 
  }
  return true;
}

function solution(n, k) {
    const array = n.toString(k).split('0').map((v)=>+v).filter((v)=>isPrime(v));
    return array.length
}
