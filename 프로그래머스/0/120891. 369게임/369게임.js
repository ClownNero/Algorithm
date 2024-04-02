function solution(order) {
    let clap = 0;
    while(order){
        const num = order % 10;
        order = parseInt(order/10);
        if(num === 3 || num === 6 || num === 9) clap++;
    }
    return clap;
}