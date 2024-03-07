const solution = (arr, divisor) => {
    let answer = arr.filter((value)=> value % divisor === 0);
    answer.sort((a,b)=> a-b);
    if(answer.length === 0 ){
        return[-1];
    }
    else return answer;
}