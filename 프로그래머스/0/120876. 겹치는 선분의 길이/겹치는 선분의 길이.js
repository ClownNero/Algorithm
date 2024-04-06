function solution(lines) {
    const array = new Array(200).fill(0);
    for(let i of lines){
        let [a, b] =i;
        for(let j =a; j<b; j++){
            array[j+100]++;
        }
    }
    
    return array.reduce((a,c) => c > 1 ? a+1: a,0);
    
    
}