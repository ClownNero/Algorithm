const solution = (genres, plays) => {
    let answer = [];
    const playCnt= {};
    for(let i =0; i < genres.length; i++){
        playCnt[genres[i]]= playCnt[genres[i]] ? playCnt[genres[i]]+plays[i] : plays[i]
    }
    const keyValueArr = Object.entries(playCnt);
    keyValueArr.sort((a,b)=> b[1] -a[1]);
    
    const allInfoObj = genres.map((g,i)=>({
        genre:g,
        index:i,
        play:plays[i]
    }))
    
    keyValueArr.forEach((k,i)=>{
        let current=[];
        for(let j=0;j<allInfoObj.length;j++){
            if(k[0]===allInfoObj[j].genre){
                current.push(allInfoObj[j]);
            }
        }
        console.log(current);
        current.sort((a,b)=>b.play-a.play);
        current.forEach((c,i)=>{
            if(i<2){
            answer.push(c.index)
            }        
        })
    })
    return answer;
}
