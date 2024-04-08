function solution(n, words) {
    const askWords = [];
    askWords.push(words[0]);
    for(let i =1; i<words.length; i++){     
        if(askWords.includes(words[i]) || askWords[askWords.length-1].charAt(askWords[askWords.length-1].length-1) !== words[i].charAt(0)){
            return [i%n + 1, Math.floor(i/n) + 1];
        }else askWords.push(words[i]);
    }
    return [0,0];
    


}