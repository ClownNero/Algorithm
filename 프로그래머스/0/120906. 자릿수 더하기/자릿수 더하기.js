function solution(n) {
    let answer = 0;
    while(n > 0){
        const num = n % 10;
        n = parseInt(n/10);
        answer +=num;
    }
    return answer;
}