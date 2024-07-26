function solution(s) {
    let answer = true;
    if(s.length === 4 || s.length === 6){
        [...s].forEach((v)=>{
        if(isNaN(v)) answer = false;
    })
    } else {
        answer= false;
    }
    
    return answer;
}