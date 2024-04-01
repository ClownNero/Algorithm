function solution(my_string) {
    return [...my_string].filter((val)=>!isNaN(val)).map((val)=>val*1).reduce((acc,cur)=>acc+cur,0);
}