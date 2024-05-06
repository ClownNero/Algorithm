function solution(sequence, k) {;
    const len = sequence.length;
    let [start, end] = [0,0];
    let sum = sequence[0];
    let answer = [0, len];
                                
    while(start < len) {
        if(sum < k && end < len){
            sum += sequence[++end];
        }
        else if(sum === k && end - start < answer[1] - answer[0]){
            answer = [start, end];
            sum += sequence[++end];
        }
        else sum -=sequence[start++];
    }
    
    return answer;
}