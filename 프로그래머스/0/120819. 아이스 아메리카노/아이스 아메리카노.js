function solution(money) {
    const coffee = 5500;
    const cup = Math.floor(money / coffee);
    const remainder = money - coffee * cup;
    let answer = [cup, remainder];
    
    return answer;
}