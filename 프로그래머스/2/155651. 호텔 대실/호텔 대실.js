function solution(book_time) {
    const sortedBook = book_time.sort();
    
    const usedRoom = [];
    
    for(let time of sortedBook) {
        const [[sH, sM],[eH,eM]] = time.map(x => x.split(':'));
        const startM = +sH * 60 + +sM;
        const endM = +eH * 60 + +eM + 10;
        const idx = usedRoom.findIndex(x=> x<= startM);
        
        if(idx === -1) {
            usedRoom.push(endM);
        } else {
            usedRoom[idx] = endM;
        }
    }
    return usedRoom.length;
}