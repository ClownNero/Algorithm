function filterStr(str){
    let result = str;
    result = result.replaceAll("A#","a");
    result = result.replaceAll("B#","b");
    result = result.replaceAll("C#","c");
    result = result.replaceAll("D#","d");
    result = result.replaceAll("F#","f");
    result = result.replaceAll("G#","g");
    
    return result;
}

function countT(start,end) {
    const [sH,sM] = start.split(":");
    const [eH,eM] = end.split(":");
    const hD = +eH - +sH;
    const mD = +eM - +sM;
    
    return 60 * hD + mD;
}

function solution(m, musicinfos) {
    const len = musicinfos.length;
    m = filterStr(m);
    
    musicinfos = musicinfos.sort((a,b) => {
        const [a_start, a_end, a_title, a_pattern] = a.split(",");
        const [b_start, b_end, b_title, b_pattern] = b.split(",");
        return countT(b_start, b_end) >= countT(a_start, a_end) ? 1 : -1;
    })
    
    for(let i = 0; i< len; i++){
        const [start, end, title, pattern] = musicinfos[i].split(",");
        
        const duration = countT(start,end);
        
        let music = filterStr(pattern);
        
        while(music.length < duration){
            music += music;
        }
        music = music.slice(0, duration+1);
        
        if(music.includes(m)) return title;       
    }
    return "(None)";
}