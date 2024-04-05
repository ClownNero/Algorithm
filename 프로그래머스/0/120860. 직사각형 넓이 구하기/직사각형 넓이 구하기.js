function solution(dots) {
    dots.sort();
    return Math.abs(dots[3][0] - dots[0][0]) * (dots[3][1] - dots[0][1]);
}