function solution(array) {
    let answer = 0;
    array.map((value)=>{
        let str = String(value);
        for(let i = 0; i<str.length; i++){
            if(str[i] ==='7') answer++;
        }
    })
    return answer;
}