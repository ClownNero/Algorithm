function solution(array) {
    let max = 0;
    let idx = 0;
    array.map((v,i)=>{
       if (v > max) {
           max = v;
           idx = i;
       }
    });
    
    return [max,idx];
}