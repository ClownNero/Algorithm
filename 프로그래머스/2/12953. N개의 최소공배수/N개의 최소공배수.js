function gcd(a, b) {
  let r
  while (b != 0) {
    r = a % b
    a = b
    b = r
  }
  return a
}
function solution(arr) {
    let i =0;
    let lcm = 0;
    while(arr.length){
        let first = arr.shift();
        let second = arr.shift();
        lcm = (first * second) / gcd(first,second);
        if(arr.length !== 0)arr.unshift(lcm);
    }
    return lcm;
}