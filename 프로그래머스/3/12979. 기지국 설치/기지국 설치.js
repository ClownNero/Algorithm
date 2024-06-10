function solution(n, stations, w) {
    let answer = 0;
    let start = 1;
    const coverage = [];
    const range = w*2+1;
    
    for(let station of stations){
        if(station - w - start > 0){
            coverage.push(station-w-start);
        }
        start = station + w + 1;
    }
    if(start <= n) coverage.push(n + 1 - start);
    for(let num of coverage){
        answer += Math.ceil(num/range);
    }
    return answer;
}