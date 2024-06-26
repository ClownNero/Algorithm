function solution(n, s) {
    if (n >= s) return [-1];
    const mid = Math.floor(s / n);
    const answer = new Array(n).fill(mid);
    
    for (let i = 0; i < s % n; i++){
        answer[n - 1 - i]++;
    }
    return answer;
}