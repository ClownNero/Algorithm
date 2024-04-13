function solution(str1, str2) {
    // 두 글자씩 끊어서 다중집합을 만든다.
    // 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다.
    let answer = 0;
    const regex = /^[a-z|A-Z]+$/;
    let arrA = [];
    let arrB = [];
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for(let i = 0; i<str1.length-1; i++){
        if(regex.test(str1.slice(i,i+2))) arrA.push(str1.slice(i,i+2));
        
    }
    for(let j =0; j<str2.length-1; j++){
        if(regex.test(str2.slice(j,j+2))) arrB.push(str2.slice(j,j+2));
    }
    
    // 합집합, 교집합 구하기
    
    const union =[]; // 중복 포함, 합집합 배열
    const intersect = [];// 중복 포함, 교집합 배열
    
    for (let i = 0; i < arrB.length; i++) {
    if (arrA.indexOf(arrB[i]) >= 0) {
      intersect.push(arrA.splice(arrA.indexOf(arrB[i]), 1)) 
    }
    union.push(arrB[i])
  }
    for (let i = 0; i < arrA.length; i++){
        union.push(arrA[i]);
    }
    if(intersect.length === 0 && union.length === 0){
        return 65536;
    }
    return parseInt(65536 * (intersect.length / union.length));
}