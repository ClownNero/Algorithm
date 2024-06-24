function solution(N, number) {
    // dp 배열을 생성합니다. 각 인덱스는 N을 i번 사용해서 만들 수 있는 숫자들을 저장할 것입니다.
    const dp = Array.from({length: 9}, () => new Set());
    
    // N을 1번 사용해서 만든 숫자는 N 자체입니다.
    dp[1].add(N);
    
    // N을 2번부터 8번까지 사용하는 경우를 탐색합니다.
    for (let i = 1; i < 9; i++){
        // N을 i번 반복해서 만든 숫자를 dp[i]에 추가합니다.
        dp[i].add(Number(String(N).repeat(i)));
        
        // N을 j번 사용한 숫자와 N을 (i-j)번 사용한 숫자를 조합해서 사칙연산을 수행합니다.
        for (let j = 1; j < i; j++) {
            for (const a of dp[j]) {
                for (const b of dp[i-j]) {
                    // 사칙연산 결과를 dp[i]에 추가합니다.
                    dp[i].add(a + b);
                    dp[i].add(a * b);
                    dp[i].add(a - b);
                    dp[i].add(Math.floor(a/b));
                }
            }
        }
        
        // 현재 dp[i]에 저장된 숫자들 중 target 숫자가 있는지 확인합니다.
        if (dp[i].has(number)){
            // target 숫자를 찾았다면 i를 반환합니다.
            return i;
        }
    }
    
    // target 숫자를 찾지 못했다면 -1을 반환합니다.
    return -1;
}