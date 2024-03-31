function solution(rsp) {
    const role ={'2':'0','0':'5','5':'2'};
    return rsp.split('').map(val=>role[val]).join("");
}