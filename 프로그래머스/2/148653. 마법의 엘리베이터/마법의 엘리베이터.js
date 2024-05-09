function solution(storey) {
    let answer = 0;
    while(storey > 0) {
        const remainder = storey % 10;
        const nextRemainder = (storey / 10) % 10;
        if(remainder < 5) {
            answer += remainder;
            storey = Math.round(storey/10);
        } 
        else if(remainder === 5) {
            answer += remainder;
            storey = nextRemainder >= 5 ? Math.ceil(storey/10) : Math.floor(storey/10);
        }
        else {
            answer += 10 - remainder;
            storey = Math.round(storey/10);
        }
    }
    return answer;
}