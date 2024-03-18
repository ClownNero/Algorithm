const solution = (array, commands) => {
    let answer = [];
    let result =[];
    commands.map((command)=>{
        result = array.slice(command[0]-1,command[1]);
        result.sort((a,b)=> a-b);
        answer.push(result[command[2] -1]);
    })
    return answer;
    
}