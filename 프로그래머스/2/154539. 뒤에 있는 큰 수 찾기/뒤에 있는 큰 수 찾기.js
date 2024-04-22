const solution = (numbers) => {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    //stack이 비어져있지 않고 현재 숫자보다 작은 숫자가 있는 경우 반복한다.
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      //스택에서 인덱스를 하나씩 꺼내서 해당 인덱스의 값을 numbers[i]로 바꿔서 뒤에 있는 큰 수를 찾는다.
      answer[stack.pop()] = numbers[i];
      //이를 반복하면서 스택에 남아있는 인덱스들에 대해서도 뒤에 있는 큰 수를 찾아낸다. 
    }
    stack.push(i);
  }
  return answer;
};