// 가위 버튼에 적용할 click handler

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

function onScissorsClick() {    // 버튼 클릭했어요 -> userinput prompt가 필요 없죠
  let comInput;   // 즉 지역변수로 처리를 하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) {comInput = SCISSORS;}
  else if (randomNum < 0.66) {comInput = ROCK;}
  else {comInput = PAPER;}

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
  }
}
function onRockClick() {    // 버튼 클릭했어요 -> userinput prompt가 필요 없죠
  let comInput;   // 즉 지역변수로 처리를 하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) {comInput = SCISSORS;}
  else if (randomNum < 0.66) {comInput = ROCK;}
  else {comInput = PAPER;}

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
  }
}
function onPaperClick() {    // 버튼 클릭했어요 -> userinput prompt가 필요 없죠
  let comInput;   // 즉 지역변수로 처리를 하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) {comInput = SCISSORS;}
  else if (randomNum < 0.66) {comInput = ROCK;}
  else {comInput = PAPER;}

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
  }
}


// 위의 코드는 call1()유형으로 각각의 3개의 함수로 정의
// 밑의 코드는 call2()유형으로 하나의 함수로 통합
function onButtonClick(userInput) {
  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  let result = `컴퓨터 : ${comInput}`

  switch(userInput) {
    case SCISSORS:
      switch(comInput) {
        case SCISSORS:
          result += '-비겼습니다'
          break;
        case ROCK:
          result += '졌습니다'
          break;
        default: result += '이겼습니다'
      }
      break;
    case ROCK:
      switch(comInput) {
        case SCISSORS:
          result += ' - 이겼습니다'
          break;
        case ROCK:
          result += '-비겼습니다'
          break;
        default: result += '졌습니다'
      }
      break;
    default:
      switch(comInput) {
        case SCISSORS:
          result += '졌습니다'
          break;
        case ROCK:
          result += '이겼습니다'
          break;
        default: result += '-비겼습니다'
      }
  }
  alert(result)
  console.log(userInput)
  console.log(comInput)
}