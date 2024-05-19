// 1. 우선 각 노드에 대한 정보들을 가지고있는 인접리스트를 생성하였다.
// 2. 다익스트라를 위해 distance를 infinity로 채워준다.
// 3. 우선순위 큐 역할을 할 배열에 값이 없을때까지 돌아주며 distance를 계속 수정해준다.
// 4. 마지막으로 distance배열에서 K이하의 값들만 남긴 뒤 값을 리턴한다.

function solution(N, road, K) {
  let graph = Array.from(Array(N + 1), () => Array());
  let distance = Array.from({ length: N + 1 }, () => Infinity);
  let queue = [];

  for (let [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
 
  queue.push([1, 0]);
  distance[1] = 0;
  while (queue.length) {
    const [point, cost] = queue.shift();
    for (let i = 0; i < graph[point].length; i++) {
      const next = graph[point][i][0];
      const nextcost = graph[point][i][1];

      if (distance[next] > distance[point] + nextcost) {
        distance[next] = distance[point] + nextcost;
        queue.push([next, nextcost]);
      }
    }
  }

  distance = distance.filter((v) => v <= K);
  return distance.length;
}