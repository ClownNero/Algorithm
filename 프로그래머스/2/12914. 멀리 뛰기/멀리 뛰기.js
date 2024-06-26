function solution(n) {
    const dp = new Array(2000).fill(0);
    dp[1] = 1; dp[2] = 2;
    for(let i =3; i<=2000; i++){
        dp[i] = dp[i-1] % 1234567 + dp[i-2] % 1234567;
    }
    return dp[n] % 1234567;
}