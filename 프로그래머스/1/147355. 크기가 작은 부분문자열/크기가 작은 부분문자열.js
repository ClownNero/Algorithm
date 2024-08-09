function solution(t, p) {
    let answer = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++) {
        let temp = t.slice(i, i + p.length);
        if(temp <= p) {
            answer++;
        }
    }
    return answer;
}