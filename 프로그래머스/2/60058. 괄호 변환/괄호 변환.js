function solution(p) {
    const len = p.length;
    // 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
    if(!p) return "";
    let [u,v] = ["",""];
    let [a,b] = [0,0];
    for(let i =0; i<len; i++){
        if(p[i]==='(') a++;
        else b++;
        u+=p[i];
        if(a === b){
            v = p.slice(i+1,len);
            break;
        }
    }
    // 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
    // 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
    if(u[u.length-1]===')') return u + solution(v);
    
    // 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
    else {
        // u의 첫 번째와 마지막 문자를 제거합니다.
        u = u.slice(1, u.length-1).split("");
        // 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
        for(let i = 0; i < u.length; i++) u[i] = u[i]===')'? '(':')';
        return "(" + solution(v) + ")" + u.join("");
    }
}