function solution(k, tangerine) {
    const obj = {};
    let sum = 0;
    let answer =0;
    tangerine.forEach((v)=>{
        obj[v] = ++obj[v] || 1;
    });
    const kind = Object.values(obj).sort((a,b)=> b-a);
    for(let num of kind){
        answer++;
        sum +=num;
        if(sum >=k)break;
    }
    return answer;
}