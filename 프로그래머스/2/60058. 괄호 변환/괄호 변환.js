function solution(p) {
    const len = p.length;
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
    if(u[u.length-1]===')') return u + solution(v);
    else {
        u = u.slice(1, u.length-1).split("");
        for(let i = 0; i < u.length; i++) u[i] = u[i]===')'? '(':')';
        return "(" + solution(v) + ")" + u.join("");
    }
}