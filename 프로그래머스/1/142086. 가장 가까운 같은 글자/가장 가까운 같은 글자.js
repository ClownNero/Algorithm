function solution(s) {
    const obj = {};
    
    return [...s].map((v,i)=>{
        let answer = obj[v] !== undefined ? i - obj[v] : -1;
        obj[v] = i;
        return answer;
    })
}