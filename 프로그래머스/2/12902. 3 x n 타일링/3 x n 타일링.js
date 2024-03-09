// 짝수만 경우의 수가 존재 홀수 배제!
const solution = (n) => {
    const dp = [1,0,3];
    for(let i = 4; i <=5000; i+=2){
        dp[i] = dp[i-2] * dp[2];
        for(let j =i-4; j >=0; j-=2){
            dp[i] = (dp[i] + dp[j] * 2) % 1000000007;
        }
    }
    return dp[n];
}