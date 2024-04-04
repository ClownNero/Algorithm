function solution(n) {
    return n % Math.sqrt(n) === 0 ? 1 : 2;
}