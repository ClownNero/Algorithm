function solution(n, edge) {
    // 그래프 초기화
    const graph = Array.from({length: n + 1}, () =>[]);
    
    
    // 간선 정보를 그래프에 추가
    for (const [u, v] of edge){
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // BFS를 위한 큐와 거리 배열 초기화
    const queue = [1]; // 시작 노드 (1번)
    const distance = Array(n+1).fill(-1); // -1로 초기화
    distance[1] = 0 // 시작 노드까지의 거리는 0
    
    // BFS 탐색
    while (queue.length) {
        const current = queue.shift();
        
        for (const neighbor of graph[current]) {
            if (distance[neighbor] === -1){ // 아직 방문하지 않은 노드
                distance[neighbor] = distance[current] + 1; // 거리 업데이트
                queue.push(neighbor); // 큐에 추가
            }
        }
    }
    
    // 가장 먼 노드의 거리 찾기
    const maxDistance = Math.max(...distance);
    
    // 가장 먼 노드의 개수 세기
    return distance.filter(d => d === maxDistance).length;
}