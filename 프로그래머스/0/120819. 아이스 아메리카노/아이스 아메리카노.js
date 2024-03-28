function solution(money) {
    const coffee = 5500;
    const cup = Math.floor(money / coffee);
    const remainder = money % coffee;
    let answer = [cup, remainder];
    
    return answer;
}