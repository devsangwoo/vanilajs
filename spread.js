const firstWeek = ['mon', 'tue', 'wend'];
const secondWeek = ['thur', 'fri'];
//...은 Unpack으로 해당 요소를 꺼내준다.
const fullWeek = [...firstWeek, ...secondWeek, 'sat', 'sun'];

console.log(fullWeek);

const lastName = prompt('Last name');

const user = {
  username: 'sangwoo',
  age: 28,
  //...은 언팩킹으로서 express을 열어줌. 그다음 lastName이 empty string이 아니고, lastname: lastname일때 True를 반환
  //Lastname만 쓸수있는것은 Shorthand property의 덕임.
  //{}로 감싸주는것은 Spread가 객체로 받기때문임.

  ...(lastName !== '' && { lastName }),
};
console.log(user);

//rest 연습
//parameter란 매개변수로 함수에게 전달해줄 인자들을 말함.
//... (언팩)은 파라매터를 expand시켜주는것임
//rest는 받은 모든 값을 하나의 변수로 축소시켜줌(contract)
//...언팩이지만 파라매터부분에들어가면 rest로 쓰임
//rest는 배열로 받아줌
const bestfriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
};
bestfriendMaker('cho', 'kim', 'xia');
