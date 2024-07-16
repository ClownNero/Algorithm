function solution(n, money) {
    const MOD = 1000000007;
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    
    for(let el of money) {
        for(let i = el; i < n+1; i++){
            dp[i] = (dp[i] + dp[i - el]) % MOD;
        }
    }
    return dp[n];
}