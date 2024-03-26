function solution(numer1, denom1, numer2, denom2) {
    const a = numer1*denom2 + numer2*denom1;
    const b = denom1*denom2;
    // 최대공약수 구하기
    function gcd(a, b){
        const remainder = a % b;
        if(remainder === 0) return b; // 종료조건
        else return gcd(b, remainder); // 재귀함수
    }
    return [a/gcd(a,b) , b/gcd(a,b)];
}