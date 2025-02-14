// 컴퓨터 관련 오브젝트
let computer = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};
// 사용자 관련 오브젝트
let user = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};
// 게임 관련 오브젝트
let game = {
  Left: 15,
  Turn: true
}

// computer.score = 0;
// user.score = 0;
// game.Turn = true;
// game.Left = 15;
// 농구 컴퓨터 AI 성능 개선 부분 관련 변수 선언
// computer.percent2 = 0.5;
// computer.percent3 = 0.33;
// 컴퓨터만 고칠건데 코드 내에 리터럴 데이터가 있는 것은 바람직하지 않으므로 userPercent2 / 3도 정의하겠습니다.
// user.percent2 = 0.5;
// user.percent3 = 0.33;
// 전부 리터럴을 변수에 대입해놨으니 여러분들은 다 수정하세요.

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  computer.score += score;
  comScoreElement.innerHTML = computer.score;
}

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  user.score += score;
  userScoreElement.innerHTML = user.score;
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

// 여기에 시나리오 관련한 함수를 작성할 예정
function updateAI() {
  if(computer.score - user.score >= 6 && computer.score - user.score <= 9) {
    // 컴퓨터가 6점 이상 9점 이하일때
    computer.percent2 = 0.6;
    computer.percent3 = 0.38;
    user.percent2 = 0.5;
    user.percent3 = 0.33;
  } else if(computer.score - user.score >= 10) {
    // 컴퓨터가 10점 이상 이길때
    computer.percent2 = 0.7;
    computer.percent3 = 0.43;
    user.percent2 = 0.5;
    user.percent3 = 0.33;
  } else if(user.score - computer.score >= 6 && computer.score - user.score <= 9) {
    // 사용자가 6점 이상 9점 이하일때
    computer.percent2 = 0.5;
    computer.percent3 = 0.33;
    user.percent2 = 0.6;
    user.percent3 = 0.38;
  } else if(user.score - computer.score >= 10) {
    // 사용자가 10점 이상 이길때
    computer.percent2 = 0.5;
    computer.percent3 = 0.33;
    user.percent2 = 0.7;
    user.percent3 = 0.43;
  } else {
    // 차이가 5점 이하일때
    computer.percent2 = 0.5;
    computer.percent3 = 0.33;
    user.percent2 = 0.5;
    user.percent3 = 0.33;
  }
}

function onComputerShoot() {
  if(!game.Turn) return;
  
  updateAI();
  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (Math.random() < computer['percent' + shootType]){ // 그럼 결과값은 'percent2' 거나 'percent3'가 되므로 computer['percent2']/computer['percent3']의 value가 산출됨
    showText('컴퓨터가 '+ shootType + '점 슛을 성공했습니다');
    updateComScore(2);
  } else {
    showText('컴퓨터가 ' + shootType + '점 슛을 실패했습니다')
  }

  game.Turn = false

  disableComButton(true);
  disableUserButton(false);
}

function onUserShoot(shootType) {
  updateAI();
  if(game.Turn) return;

  if (shootType === 2) {
    if (Math.random() < user.percent2) {
      showText('2점슛을 성공시킴');
      updateUserScore(2);

    } else {
      showText('2점슛을 실패했습니다!');
    }
  } else {
    if(Math.random() < user.percent3) {
      showText('3점슛을 성공시켰음');
      updateUserScore(3);

    } else {
      showText('3점슛 실패!');
    }
  }
  game.Turn = true;

  disableComButton(false);
  disableUserButton(true);

  game.Left --;

  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = game.Left;

  if (game.Left === 0) {
    if(computer.score < user.score) {
      alert(`${user.score - computer.score} 점 차이로 플레이어 승!`);
      showText(`${user.score - computer.score} 점 차이로 플레이어 승!`)
    } else if(computer.score > user.score) {
      alert(`${computer.score - user.score} 점 차이로 플레이어 패...`);
      showText(`${computer.score - user.score} 점 차이로 플레이어 패...`)
    } else{
      alert(`${user.score} 점으로 무승부!`);
      showText(`${user.score} 점으로 무승부!`);
    }
  }
  if (game.Left < 0) {
    showText('횟수 오버 error error error error error error error')
  }
}

