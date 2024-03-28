function solution(price) {
    let answer = 0;
    if (price >= 500000){
        answer = price - (price / 5);
    }
    else if(price >= 300000){
        answer = price - (price / 10);
    }
    else if(price >= 100000){
        answer = price - (price / 20);
    }
    else answer = price;
    
    return Math.floor(answer);
}