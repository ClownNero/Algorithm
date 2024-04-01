function solution(n) {
  let arr = [];
  
  for (let i = 2; i <= n; i ++) {
    while(n % i === 0){
        n = n/i;
        if(n%i !== 0){
            arr.push(i);
        }
    }
  }

   return arr
}