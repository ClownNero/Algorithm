function solution(num, total) {
    let answer = [];
    let center=0;
    center = Math.floor(total/num);
    answer.push(center);
    if(num % 2) {
        for(let i =1; i<= (num-1)/2; i++){
            answer.unshift(center-i);
            answer.push(center+i);
        }
    }
    else {
        for(let i =1; i<= (num-1)/2; i++){
            answer.unshift(center-i);
        }
        for(let i =1; i<= num/2; i++){
            answer.push(center+i);
        }
    }
    return answer;
}