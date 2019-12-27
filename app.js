const email = ['nico@naver.com', 'gagaku@google.com', 'sangwoo@gmail.com'];

//Using arrow function for find function. 애로우펑션은 아규먼츠가 같으면 생략가능.
const foundMail = email.find(item => item.includes('@gmail.com'));
//필터펑션은 맵과같이 새롭게 array를 반환함, 조건에 맞는필터로.
const noGmail = email.filter(potato => !potato.includes('@gmail.com'));

console.log(foundMail);
console.log(noGmail);

const htmlMail = document.querySelector('h1');
const htmlGmail = document.querySelector('h2');
const htmlinitmail = document.querySelector('.initmail');
const deleteMail = document.querySelector('.deleteMail');
htmlinitmail.innerHTML = email;

function handleTag() {
  const foundMail = email.find(item => item.includes('@gmail.com'));
  htmlMail.innerHTML = `${foundMail}`;
  const noGmail = email.filter(potato => !potato.includes('@gmail.com'));
  htmlGmail.innerHTML = `${noGmail}`;
  // foreach로 표현할때는 항상 배열이면 배열으로 초기화를 해주고 받아줘야한다. 받을땐  push로
  //   const emailname = [];
  //   email.forEach(apple => {
  //     emailname.push(apple.split('@')[0]);
  //   });
  const emailname = email.map(apple => apple.split('@')[0]);

  deleteMail.innerHTML = `${emailname}`;
}

function init() {
  handleTag();
}
init();
