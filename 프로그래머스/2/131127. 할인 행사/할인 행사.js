function solution(want, number, discount) {
    let answer = 0;

// 2️⃣ 아래 for문을 통해 자른 10개짜리 배열 대입
    const isMatch = (discount) => {
        let map = new Map();
        // 10개짜리 배열 돌면서 map에 세팅 (상품이름, 갯수) -> Map이기 때문에 중복이름은 존재X
        discount.forEach((d) => map.set(d, (map.get(d) || 0) + 1));
        // map에서 구매목록이름(want)과 일치하는 항목의 갯수와
        // number의 갯수와 같지 않다면 false (반복문 탈출) -> 새로운 배열 받아와서 다시 진행
        for (let i = 0; i < want.length; i++) {
            if (map.get(want[i]) !== number[i]){
                return false;
            };
        };
        // 그 이외에는 true값 반환
        return true;
    };
    
// 1️⃣ discount 배열 10개씩 자르기
    for (let i = 0; i <= discount.length - 10; i++) {
        const sliceArr = discount.slice(i, i + 10);
        // isMatch 함수에 배열 넣어서 true or false 판단
        // true이면 asnwer에 + 1
        if (isMatch(sliceArr)){
            answer += 1;
        };
    };
    
    return answer;
};