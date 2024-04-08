function solution(s) { 
    let count =0;
    let num = 0;
    while(s !== "1"){
        const len = s.length - s.replaceAll('0','').length;
        s = s.replaceAll('0','').length.toString(2);
        count++;
        num +=len;
    }  
    return [count, num];
    
}