function solution(numbers, k) {
    let answer = 0;
    const len = numbers.length;
    for(let i =0; i<k; i++){
        answer = numbers[2*i%len];
    }
    return answer;
}