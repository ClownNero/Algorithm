function solution(n) {
    const len = n.toString(2).replaceAll('0','').length;
    let i =1;
    let result =0;
    while(true){
        result = n + i;
        if(result.toString(2).replaceAll('0','').length===len){
            break;
        }else i++;
    }
    return result;
}