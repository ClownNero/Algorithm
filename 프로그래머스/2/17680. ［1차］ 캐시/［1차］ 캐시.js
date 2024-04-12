const solution = (cacheSize, cities) => {
  let answer = 0;
  let arr = [];

  //1. 도시를 모두 대문자로 통일한다.
  cities = cities.map((it) => it.toUpperCase());
  
  //2. 캐시사이즈가 0이면 모든게 cache miss 이므로 *5로 리턴한다.
  if (cacheSize == 0) return cities.length * 5;

  //3. 배열을 순회하며 cache hit이면 배열의 맨뒤로 푸시하고 
  // cache miss일때는 (배열이 꽉찼다면 맨앞을 제거하고) 배열의 맨뒤로 푸시한다.
  for (let i = 0; i < cities.length; i++) {
    const idx = arr.findIndex((it) => it === cities[i]);
    if (idx !== -1) { // 배열에 도시가 있는 경우
      arr.splice(idx, 1); // 배열에서 해당 위치 도시 삭제
      answer += 1;
    } else if (arr.length === cacheSize) {
      answer += 5;
      arr.shift();
    } else {
      answer += 5;
    }
    arr.push(cities[i]);
  }
  return answer;
};