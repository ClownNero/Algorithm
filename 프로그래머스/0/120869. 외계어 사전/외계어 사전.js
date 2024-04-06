function solution(spell, dic) {
    return dic.filter((v1)=>{
        const isInclude = spell.filter((v2)=>v1.includes(v2)).length;
        if(isInclude === spell.length){
            return true;
        }
    }).length === 0 ? 2: 1;
}