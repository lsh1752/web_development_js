let my = Number(prompt("1은 가위 2는 바위 3은 보"));
let computer = Math.random();

if(computer < 0.33){
  if(my == 1) {
    alert("컴퓨터 : 가위 비김");
  } else if(my == 2) {
    alert("컴퓨터 : 가위 이김");
  } else {
    alert("컴퓨터 : 가위 짐");
  }
} else if(computer < 0.66 ) {
  if(my == 1) {
    alert("컴퓨터 : 바위 짐");
  } else if(my == 2) {
    alert("컴퓨터 : 바위 비김");
  } else {
    alert("컴퓨터 : 바위 이김");
  }
}else{
  if(my == 1) {
    alert("컴퓨터 : 보 이김");
  } else if(my == 2) {
    alert("컴퓨터 : 보 짐");
  } else{
    alert("컴퓨터 : 보 비김");
  }
}
