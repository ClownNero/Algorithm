function solution(routes) {
    // 진입 시점들 오름차순 정렬
    routes.sort((a,b) => a[0] - b[0]);
    const len = routes.length;
    let answer = 1;
    // 첫 진출시점 초기화
    let out  = routes[0][1];
    for(let i = 1; i < len; i++){
        // 진출시점보다 현재 차량의 진입이 작은 경우
        // 카메라 추가 설치 및 out 시점 갱신
        if (out < routes[i][0]){
            answer++;
            out = routes[i][1];
        }
        // 진출시점이 현재 차량의 진출시점보다 큰 경우
        // out 시점 갱신
        if (out > routes[i][1]) {
            out = routes[i][1];
        }
    }
    return answer;
}