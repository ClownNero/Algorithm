function solution(numbers) {
    const len = numbers.length;
    let temp = [];
    
    for(let i =0; i < len; i++){
        for(let j = i+1; j < len; j++){
            temp.push(numbers[i] + numbers[j]);
        }
    }
    return [...new Set(temp)].sort((a,b)=> a-b);
}