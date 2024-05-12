function solution(s){
    const s_lower = s.toLowerCase();
    const p_num = s_lower.split('p').length;
    const y_num = s_lower.split('y').length;
    
    return p_num === y_num ? true : false;
}