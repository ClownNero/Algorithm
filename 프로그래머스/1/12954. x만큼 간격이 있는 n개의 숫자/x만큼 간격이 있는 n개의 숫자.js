function solution(x, n) {
    let answer= [];
    while(n){
        answer.unshift(x*n);
        n--;
    }
    return answer;
}