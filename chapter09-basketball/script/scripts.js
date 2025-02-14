// 점수 총합을 대입할 변수 선언
let comScore = 0;
let userScore = 0;
// 컴퓨터 턴이면 내 턴이 아님 // 내 턴이면 컴퓨터 턴이 아님 : 그 결과 우리는 boolean을 택할 겁니다.
let isComputerTurn = true;
let shootLeft = 15;

function onComputerShoot() {
  if(!isComputerTurn) return;

  // 삼항연산자 - Math.random()을 응용
  let shootType = Math.random() < 0.5 ? 2 : 3;
  let comScoreElement = document.getElementById('computer-score');
  let textElement = document.getElementById('text');

  // 점수 총합을 대입할 변수 선언


  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 2점슛 1/2 확률로 성공
      textElement.innerHTML = '컴퓨터가 2점슛을 성공시킴'
      comScore += 2;

      comScoreElement.innerHTML = comScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '컴퓨터가 2점슛을 실패했습니다!'
    }
  } else {
    if(Math.random() < 0.33) {
      // 3점슛 1/3 확률로 성공
      textElement.innerHTML = '컴퓨터가 3점슛을 성공시켰음'
      comScore += 3;

      comScoreElement.innerHTML = comScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '컴퓨터가 3점슛 실패!'
    }
  }

  isComputerTurn = false

  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = true;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i ++) {
    userButtons[i].disabled = false;
  }
}

function onUserShoot(shootType) {
  if(isComputerTurn) return;

  let textElement = document.getElementById('text');  // onComputerShoot() 에서도 지역변수로 선언햇고, 여기서도 동일합니다.
  let userScoreElement = document.getElementById('user-score');

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 2점슛 1/2 확률로 성공
      textElement.innerHTML = '2점슛을 성공시킴'
      userScore += 2;

      userScoreElement.innerHTML = userScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '2점슛을 실패했습니다!'
    }
  } else {
    if(Math.random() < 0.33) {
      // 3점슛 1/3 확률로 성공
      textElement.innerHTML = '3점슛을 성공시켰음'
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '3점슛 실패!'
    }
  }
  isComputerTurn = true;

  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i ++) {
    userButtons[i].disabled = true;
  }

  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = false;
  }

  // onUserShoot()을 호출했을 때에만 shootLeft가 --; 되어야 함..
  shootLeft --;

  // 이거는 그냥 JS 상에서 --를 먹을 뿐이지 HTML에서 가시적으로 바뀌지 않습니다

  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = shootLeft;

  // 조건문을 적용 -> shootLeft === 0일 때 게임 종료

  if (shootLeft === 0) {
    // 사용자 이겼을 때 - 졌을 때 - 비겼을 때
    if(comScore < userScore) {
      alert(`${userScore - comScore} 점 차이로 플레이어 승!`);
      textElement.innerHTML = (`${userScore - comScore} 점 차이로 플레이어 승!`)
    } else if(comScore > userScore) {
      alert(`${comScore - userScore} 점 차이로 플레이어 패...`);
      textElement.innerHTML = (`${comScore - userScore} 점 차이로 플레이어 패...`)
    } else{
      alert(`${userScore} 점으로 무승부!`);
      textElement.innerHTML = (`${userScore} 점으로 무승부!`)
    } 
  }
}

