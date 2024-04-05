function solution(numbers) {
    let answer = 0;
    const len = numbers.length;
    numbers.sort((a,b)=>a-b);
    if(numbers[0]*numbers[1] >= numbers[len-1] * numbers[len-2]){
        answer = numbers[0]*numbers[1];
    } else answer = numbers[len-1] * numbers[len-2];
    return answer;
}