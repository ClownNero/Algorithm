const factorial = (n)=> n === 1 ? 1: n * factorial(n-1);
function solution(n) {
    for(let i =2; i<=11; i++){
        if(n < factorial(i)) return i-1;
    }
}