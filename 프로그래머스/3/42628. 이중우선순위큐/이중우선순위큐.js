const solution = (operations) => {
    const queue = [];
    for(let i of operations) {
        const arr = i.split(' ');
        if(arr[0] === 'I'){
            queue.push(parseInt(arr[1]));
        }
        if(arr[0] === 'D'){
            if(queue.length){
                queue.sort((a,b)=>b-a);
                if(arr[1] === '1'){
                    queue.shift();
                }
                else queue.pop();
            }
            else continue;
            
        }
    }
    
    queue.sort((a,b)=>b-a);
    return queue.length ? [queue[0],queue[queue.length-1]] : [0,0];  
}