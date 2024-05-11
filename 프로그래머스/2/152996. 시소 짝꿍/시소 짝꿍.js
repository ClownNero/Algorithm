function solution(weights) {
    // 시소 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있습니다.
    let answer = 0;
    const map = new Map();
    const cal = [1,2/3,2/4,3/4];
    weights.sort((a,b)=> a-b).forEach((val)=>{
        cal.forEach(c => {
            if(map.has(val*c)) {
                answer+=map.get(val*c);
            }
        })
        map.set(val,(map.get(val) || 0) + 1);
    })
    return answer;
}