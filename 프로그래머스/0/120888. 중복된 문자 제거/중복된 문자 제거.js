function solution(my_string) {
    var answer = '';
    const set = new Set();
    for(let i of my_string){
        set.add(i);
    }
    for(let i of set){
        answer+=i;
    }
    return answer;
}