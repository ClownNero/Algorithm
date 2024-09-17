function solution(name, yearning, photo) {
    const photoMap = new Map();
    
    // 맵을 만들어 점수를 저장한다.
    name.forEach((person, idx) => {
        photoMap.set(person, yearning[idx]);
    })
    
    // 각 포토 마다의 점수를 배열로 구해야 하므로 map을 이용한다.
    return photo.map((arr) => 
        // 각 요소 배열을 reduce 메서드를 이용해 점수를 구한다.
        arr.reduce((acc, cur) => acc + (photoMap.get(cur) || 0), 0)
    );
}