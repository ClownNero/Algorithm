function solution(strlist) {
    let answer =[];
    strlist.map((val,idx)=>{
       answer.push(val.length); 
    });
    return answer;
}