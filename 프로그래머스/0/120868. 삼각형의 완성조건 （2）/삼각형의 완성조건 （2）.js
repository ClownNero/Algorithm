function solution(sides) {
    // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
    let answer = 0;
    let [a, b] = sides;
    let c = 0;
    const max = Math.max(a,b);
    const min = Math.min(a,b);
    // 주어진 두 길이 중 하나가 가장 길 때,
    for(let i = max; max < i+min ; i--){
        answer ++;
    }
    // 주어진 두 길이 외 나머지 하나가 가장 길 때,
    for(let i =a+b-1; i<a+b && i> max; i--){
        answer++;
    }
    return answer;

}