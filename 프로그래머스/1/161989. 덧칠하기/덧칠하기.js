function solution(n, m, section) {
    let answer = 0; // 색칠 횟수
    let currentEnd = 0; // 현재까지 칠한 구간의 끝
    
    section.forEach((v)=>{
        // 현재 색칠해야 할 구간의 시작이 현재까지 칠한 구간의 끝보다 크면
        if(v > currentEnd){
            answer++; // 색칠 횟수 1 증가
            currentEnd = v + m - 1; // 현재 칠한 구간의 끝 업데이트
        }
    })
    
    return answer;
}