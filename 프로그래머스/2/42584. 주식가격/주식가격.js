const solution = (prices) => {
    const answer =[];
   
    for(let i = 0; i < prices.length; i++){
        let time = 0;
        for(let j=i+1; j< prices.length; j++){
            if(prices[i] > prices[j]) { time++; break;}
            else time++;
        }
        answer.push(time);
    }
    
    return answer;
    
}