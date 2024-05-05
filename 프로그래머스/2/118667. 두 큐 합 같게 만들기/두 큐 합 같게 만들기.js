function solution(queue1, queue2) {
    let answer = 0;
    let firstQSum = queue1.reduce((a,c)=>a+c,0);
    let secondQSum = queue2.reduce((a,c)=>a+c,0);
    let firstQIndex=0
    let secondQIndex = 0;
    const half = (firstQSum + secondQSum) / 2;
    const len = queue1.length + queue2.length;
    
    while(firstQSum !== secondQSum ){
        if(firstQSum > secondQSum) {
            firstQSum -= queue1[firstQIndex];
            queue2.push(queue1[firstQIndex]);
            secondQSum += queue1[firstQIndex];
            firstQIndex++;
        }
        else {
            firstQSum += queue2[secondQIndex];
            queue1.push(queue2[secondQIndex]);
            secondQSum -= queue2[secondQIndex];
            secondQIndex++;
        }
        answer++;
        if(firstQIndex > len || secondQIndex > len) return -1;
    }
    return answer;
}