function solution(park, routes) {
    // 1. 주어진 방향으로 이동할 때 공원을 벗어나는지 확인
    // 2. 주어진 방향으로 이동 중 장애물을 만나는지 확인
    // 위 두 가지중 어느 하나라도 해당되면 명령 무시!
    let start = [];
    const dir = {
        N:[-1,0],
        S:[1,0],
        W:[0,-1],
        E:[0,1]
    };
    const r = park.length;
    const c = park[0].length;
    for(let j = 0; j <r; j++){
        for(let k =0; k<c; k++){
            if(park[j][k] === 'S'){
                start.push(j);
                start.push(k);
                break;
            }
        }
    }
    for(const route of routes){
        const [op, n] = route.split(" ");
        let [nx, ny] = start;
        let step = 0;
        while(step < +n){
            nx += dir[op][0];
            ny += dir[op][1];
            if(nx < 0 || r <= nx || ny < 0 || c <= ny || park[nx][ny] === "X") break;
            step++;
        }
        if(step === +n) start = [nx, ny];
    }
    
    return start;
}