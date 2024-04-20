function solution(dirs) {
    const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let point = [0, 0];
    let route = new Set();
    
    for (let dir of dirs) {
        let pointX = point[0] + move[dir][0];
        let pointY = point[1] + move[dir][1];
        
        if (pointX > 5 || pointX < -5 || pointY > 5 || pointY < -5) continue;
        
        route.add("" + point[0] + point[1] + pointX + pointY);
        route.add("" + pointX + pointY + point[0] + point[1]);
        
        point = [pointX, pointY];
    }
    
    return route.size / 2;
}