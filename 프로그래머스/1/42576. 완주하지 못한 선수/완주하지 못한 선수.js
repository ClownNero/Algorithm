const solution = (participant, completion) =>{
    participant.sort();
    completion.sort();
    for(let i=0;i < participant.length; i++){
        if(participant[i] !== completion[i]){
            if(participant.length-1) console.log(completion[participant.length-1])
            return participant[i];
        }
    }
}