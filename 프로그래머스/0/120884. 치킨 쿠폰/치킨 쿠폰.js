function solution(chicken) {
    let answer = 0;
    let service = 0;
    while(Math.floor(chicken/10)){
        service = Math.floor(chicken/10);
        answer += service;
        chicken = chicken % 10;
        chicken += service;
    }
    return answer;
}