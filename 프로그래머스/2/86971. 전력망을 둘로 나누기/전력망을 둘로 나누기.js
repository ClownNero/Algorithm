// 1. wires를 반복문을 통해 확인하여 모든 edge의 내용을 저장해줍니다.
// 2. wires를 반복문을 통해 다시 확인하며 각 edge가 없다는 가정하에 완전탐색을 진행합니다.
// - 예시 1: w(wires 내부의 값) = [3,4]의 경우, 3과 4 사이의 edge가 삭제되었다고 가정함. 따라서 3의 서브트리, 4의 서브트리를 각각 완전 탐색하여 노드의 갯수를 세고, 그 갯수의 차이가 answer보다 작으면 answer 값을 갱신함.
// - 예시 2: w = [1,5]의 경우, 1과 5 사이의 edge가 삭제되었다고 가정함. 1에서 출발한 서브트리와 5에서 출발한 서브트리의 노드 갯수를 세고, 이 갯수의 차이를 answer과 비교하여 answer값을 갱신함.
const solution = (n, wires) => {
    const links = {};
    wires.map(w => { // 풀이과정 1
        const [a, b] = w;
        if(!links[a]) links[a] = [];
        if(!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    })
    
    const searchTree = (root, exception) => {
        let count = 0;
        const queue = [root];
        const visited = [];
        visited[root] = true;
        while(queue.length) {
            const cur = queue.pop();
            links[cur].map(next => {
                if(next !== exception && !visited[next]){
                    visited[next] = true;
                    queue.push(next);
                }
            })
            count++;
        }
        return count;
    }
    
    let answer = 100;
    wires.map((w, i) => {   // 풀이과정 2
        const [a, b] = w;
        const dif = Math.abs(searchTree(a,b) - searchTree(b,a));
        answer = answer > dif ? dif : answer;
    })
    return answer;
}