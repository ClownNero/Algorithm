function solution(my_string) {
    return[...my_string].sort().map((val)=>val=parseInt(val)).filter((val)=>!isNaN(val));
}