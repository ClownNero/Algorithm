const solution = (answers) => {
    const answer = [];
    const len = answers.length;
    const score = [0, 0, 0];
    // 수포자들 찍는 방식의 패턴
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5];
    const p3 = [3,3,1,1,2,2,4,4,5,5];
    
    for(let i =0; i < len; i++){
        if(p1[i % p1.length] === answers[i]) {
            score[0]++;
        }
        if(p2[i % p2.length] === answers[i]) {
            score[1]++;
        }
        if(p3[i % p3.length] === answers[i]) {
            score[2]++;
        }
    }
    const max = Math.max(...score);
    
    for(let i = 0; i < score.length; i++){
        if(score[i] === max){
            answer.push(i+1);
        }
    }
    
    return answer;
}