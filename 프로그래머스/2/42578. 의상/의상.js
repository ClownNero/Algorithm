const solution = (clothes) => {
    const map = new Map();
    for(const [name, type] of clothes){
        if(map.get(type)) map.set(type, map.get(type)+1)
        else map.set(type,1)
    }
    console.log(map);
    let answer = 1;
    for(const [key, val] of map){
        answer *= val + 1;
    }
    // 아무 옷을 안 입는 경우를 빼줘야함.
    return answer-1;
}