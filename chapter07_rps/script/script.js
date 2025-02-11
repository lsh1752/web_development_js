let userInput = prompt("가위 바위 보 중에 하나");
let comInput = Math.random();
const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";
// let my = prompt("가위 바위 보 중에 하나");
// let computer = Math.random();

// if(computer < 0.33){
//   if(my == "가위") {
//     alert("컴퓨터 : 가위 비김");
//   } else if(my == "바위") {
//     alert("컴퓨터 : 가위 이김");
//   } else {
//     alert("컴퓨터 : 가위 짐");
//   }
// } else if(computer < 0.66 ) {
//   if(my == "가위") {
//     alert("컴퓨터 : 바위 짐");
//   } else if(my == "바위") {
//     alert("컴퓨터 : 바위 비김");
//   } else {
//     alert("컴퓨터 : 바위 이김");
//   }
// }else{
//   if(my == "가위") {
//     alert("컴퓨터 : 보 이김");
//   } else if(my == "바위") {
//     alert("컴퓨터 : 보 짐");
//   } else{
//     alert("컴퓨터 : 보 비김");
//   }
// }

if (comInput < 0.33) {
  comInput = SCISSORS;
} else if (comInput < 0.66) {
  comInput = ROCK;
} else {
  comInput = PAPER;
}
// userInput 기준 작성
// if (userInput === SCISSORS) {
//   //comInput 비교
//   if (comInput === SCISSORS) {
//     // 사용자가 비긴 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
//   } else if (comInput == ROCK) {
//     // 사용자가 진 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`)
//   } else {
//     // 사용자가 이긴 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
//   }
// } else if (userInput === ROCK) {
//   if (comInput === SCISSORS) {
//     // 사용자가 이긴 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
//   } else if (comInput == ROCK) {
//     // 사용자가 비긴 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
//   } else {
//     // 사용자가 진 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
//   }
// } else {
//   // comInput 비교
//   if (comInput === SCISSORS) {
//     // 사용자가 비긴 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
//   } else if (comInput == ROCK) {
//     // 사용자가 진 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
//   } else {
//     // 사용자가 이긴 경우
//     alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
//   }
// }

// 개선안 : 상수를 활용 ctrl + h 사용하면 대치 가능

// switch 개선 부분

switch(userInput) {
  case SCISSORS:
    switch(comInput) {
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
        break;
      default: alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`) 
    }
    break;
  case ROCK:
    switch(comInput) {
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
        break;
      default: alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`) 
    }
    break;
  default:
    switch(comInput) {
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 졌습니다.`)
        break;
      default: alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`) 
    }
}