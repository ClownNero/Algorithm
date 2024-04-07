function solution(before, after) {
    const len = before.length;
    const barray = [...before];
    const aarray = [...after];
    return barray.filter((v)=>{
       if (aarray.indexOf(v) !== -1) {
           aarray[aarray.indexOf(v)] = 1;
            return true;
       }else
           return false;
    }).length === len ? 1 : 0;
}