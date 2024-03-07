const solution = (maps) => {
    const n = maps.length;  
    const m = maps[0].length;
    const visited = Array(n).fill(0).map(()=> Array(m).fill(0));
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    const bfs = (x, y) => {
        let q = [];
        visited[x][y] = 1;
        q.push([x,y]);
        while(q.length) {
            const [cx, cy] = q.shift();
            for(let dir = 0; dir < 4; dir++){
                let nx = cx + dx[dir];
                let ny = cy + dy[dir];
                if( nx < 0 || nx >= n || ny < 0 || ny >= m ) continue;
                if(maps[nx][ny] === 0 || visited[nx][ny] !== 0) continue;
                visited[nx][ny] = visited[cx][cy] + 1;
                q.push([nx, ny]);
            }
        }
    };
    
    bfs(0, 0);
    return visited[n - 1][m - 1] ? visited[n -1][m - 1]: -1;
}