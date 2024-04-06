function gcd(x,y){
    if(y === 0 )return x;
    else return gcd(y, x % y);
}
function solution(a, b) {
    const divisor = gcd(a,b);
    const list =[];
    let num = b /divisor;
    for(let i=2; i<=num; i++){
        while(num % i ===0){
            num /= i;
            list.push(i);
        }
    }
    return [...new Set(list)].filter((v) => !(v == 2 || v == 5)).length
    ? 2
    : 1;
}