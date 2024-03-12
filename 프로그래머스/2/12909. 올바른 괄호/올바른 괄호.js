const solution = (s) =>{
    const answer = true;
    const Stack = [];
    if(s[0]===')') return false;
    for(let i = 0; i< s.length; i++){
        if(s[i] === '('){
            Stack.push('(');
        }
        else Stack.length > 0 && Stack.pop();
    }
    return Stack.length === 0 ? true : false;
}