let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shootLeft = 15;
// 농구 컴퓨터 AI 성능 개선 부분 관련 변수 선언
let comPercent2 = 0.5;
let comPercent3 = 0.33
// 컴퓨터만 고칠건데 코드 내에 리터럴 데이터가 있는 것은 바람직하지 않으므로 userPercent2 / 3도 정의하겠습니다.
let userPercent2 = 0.5;
let userPercent3 = 0.33;
// 전부 리터럴을 변수에 대입해놨으니 여러분들은 다 수정하세요.
// 여기에 리팩토링의 첫 번째 단계 함수화 진행 -> 반복되는데 짧아서 대체 가능한 애

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;
  comScoreElement.innerHTML = comScore;
}

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  userScore += score;
  userScoreElement.innerHTML = userScore;
}

function disableComButton(flag) {
  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disableUserButton(flag) {
  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i ++) {
    userButtons[i].disabled = flag;
  }
}

function updateAI() {
  if(comScore - userScore >= 6 && comScore - userScore <= 9) {
    // 컴퓨터가 6점 이상 9점 이하일때
    comPercent2 = 0.6;
    comPercent3 = 0.38;
    userPercent2 = 0.5;
    userPercent3 = 0.33;
  } else if(comScore - userScore >= 10) {
    // 컴퓨터가 10점 이상 이길때
    comPercent2 = 0.7;
    comPercent3 = 0.43;
    userPercent2 = 0.5;
    userPercent3 = 0.33;
  } else if(userScore - comScore >= 6 && comScore - userScore <= 9) {
    // 사용자가 6점 이상 9점 이하일때
    comPercent2 = 0.5;
    comPercent3 = 0.33;
    userPercent2 = 0.6;
    userPercent3 = 0.38;
  } else if(userScore - comScore >= 10) {
    // 사용자가 10점 이상 이길때
    comPercent2 = 0.5;
    comPercent3 = 0.33;
    userPercent2 = 0.7;
    userPercent3 = 0.43;
  } else {
    // 차이가 5점 이하일때
    comPercent2 = 0.5;
    comPercent3 = 0.33;
    userPercent2 = 0.5;
    userPercent3 = 0.33;
  }
}

function onComputerShoot() {
  if(!isComputerTurn) return;

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < comPercent2) {
      showText('컴퓨터가 2점슛을 성공시킴');
      updateComScore(2);

    } else {
      showText('컴퓨터가 2점슛을 실패했습니다!');
    }
  } else {
    if(Math.random() < comPercent3) {
      showText('컴퓨터가 3점슛을 성공시켰음');
      updateComScore(3);

    } else {
      showText('컴퓨터가 3점슛 실패!');
    }
  }

  isComputerTurn = false

  disableComButton(true);
  disableUserButton(false);
}

function onUserShoot(shootType) {
  if(isComputerTurn) return;

  if (shootType === 2) {
    if (Math.random() < userPercent2) {
      showText('2점슛을 성공시킴');
      updateUserScore(2);

    } else {
      showText('2점슛을 실패했습니다!');
    }
  } else {
    if(Math.random() < userPercent3) {
      showText('3점슛을 성공시켰음');
      updateUserScore(3);

    } else {
      showText('3점슛 실패!');
    }
  }
  isComputerTurn = true;

  disableComButton(false);
  disableUserButton(true);

  shootLeft --;

  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = shootLeft;

  if (shootLeft === 0) {
    if(comScore < userScore) {
      alert(`${userScore - comScore} 점 차이로 플레이어 승!`);
      showText(`${userScore - comScore} 점 차이로 플레이어 승!`)
    } else if(comScore > userScore) {
      alert(`${comScore - userScore} 점 차이로 플레이어 패...`);
      showText(`${comScore - userScore} 점 차이로 플레이어 패...`)
    } else{
      alert(`${userScore} 점으로 무승부!`);
      showText(`${userScore} 점으로 무승부!`);
    }
  }
  if (shootLeft < 0) {
    showText('횟수 오버 error error error error error error error')
  }
}

