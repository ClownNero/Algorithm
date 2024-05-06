function solution(n) {
    let graph = [];
    let answer = [];
    
    let y = -1;
    let x = 0;
    let num = 1;
    
    for(let i =1; i<=n; i++){
        let temp = Array(i).fill(0);
        graph.push(temp);
    }
    
    for(let i = 0; i< n; i++){
        for(let j =i; j<n; j++){
            // 밑으로 내려간다.
            if (i % 3 === 0){
                y +=1;
            }
            // 왼쪽에서 오른쪽으로 간다.
            else if(i % 3 === 1) {
                x +=1;
            }
            // 위로 올라간다.
            else {
                y-=1;
                x-=1;
            }
            graph[y][x] = num;
            num++;
        }
    }
    for(let i =0; i< n; i++){
        answer = [...answer, ...graph[i]];
    }
    return answer;
}