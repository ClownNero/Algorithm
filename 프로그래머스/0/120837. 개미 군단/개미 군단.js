function solution(hp) {
    let dp = Array(1000).fill(0);
    dp[1] = 1;dp[2] = 2; dp[3]=1; dp[4]=2; 
    for(let i=5; i<=1000; i++){
        dp[i] = Math.min(dp[i-1]+1, Math.min(dp[i-3] + 1,dp[i-5]+1));
    }
    return dp[hp];
}