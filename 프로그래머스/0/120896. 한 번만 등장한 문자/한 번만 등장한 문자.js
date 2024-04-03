function solution(s) {
    let array = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) array.push(c);
    return array.sort().join('');
}