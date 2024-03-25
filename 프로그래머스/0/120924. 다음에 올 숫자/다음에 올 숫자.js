function solution(common) {
    let answer =[];
    for(let i =0; i<common.length-1; i++){
        answer.push(common[i+1]- common[i]);
    }
    if(answer[1]===answer[0]) return common[common.length-1] + answer[0];
    else return common[common.length-1] * answer[1]/answer[0];
}