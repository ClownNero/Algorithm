function solution(s) {
    const map = new Map();
    const array = [];
    s.split(/,|{|}/).filter((v)=> v !== '').forEach((v,i)=>{
        if(map.get(v)) map.set(v,map.get(v)+1);
        else map.set(v,1);
    });
    [...map].sort((a,b)=>b[1]-a[1]).forEach((v)=>array.push(+v[0]));
    return array;
}