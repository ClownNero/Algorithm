function solution(edges) {
    let answer = [0, 0, 0, 0];
    let inoutMap = new Map();
    let maxNode = -1;

    for(let v of edges) {
        let from = v[0], to = v[1];
        if(inoutMap.has(from)) {
            inoutMap.get(from).out++;
        } else {
            inoutMap.set(from, {out: 1, in: 0});
        }
        if(inoutMap.has(to)) {
            inoutMap.get(to).in++;
        } else {
            inoutMap.set(to, {out: 0, in: 1});
        }
        maxNode = Math.max(maxNode, from, to);
    }

    for(let node = 1; node <= maxNode; node++) {
        if(!inoutMap.has(node)) continue;
        let inout = inoutMap.get(node);
        if(inout.out >= 2 && inout.in === 0) {
            answer[0] = node;
        } else if(inout.out === 0) {
            answer[2]++;
        } else if(inout.out >= 2 && inout.in >= 2) {
            answer[3]++;
        }
    }

    answer[1] = inoutMap.get(answer[0]).out - (answer[2] + answer[3]);

    return answer;
}
