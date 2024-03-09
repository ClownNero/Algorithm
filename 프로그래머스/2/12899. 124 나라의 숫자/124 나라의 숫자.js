const solution = (n) => {
    let answer = '';
    // 1, 2, 4 사용 => 3진법과 유사
    // n % 3 = 0 => 4
    // n % 3 = 1 => 1
    // n % 3 = 2 => 2
    const num = [4, 1, 2];
    
    while(n){
        // 3으로 나눈 나머지 저장
        answer = num[n%3] + answer;
        // 3과 정확히 떨어지면 몫이 1이 생기기 떄문에 -1을 해준 후 계산한다.
        n = parseInt((n-1)/3);
    }
    return answer;
}