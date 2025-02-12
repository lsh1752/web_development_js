let num = [6];
for(let i = 0 ; i < 6 ; i++) {
  num[i] = Math.floor((Math.random()*100)+1);
  while (num[i] > 45){
    num[i] = Math.floor((Math.random()*100) + 1) 
  }
  for(let j = 0 ; j < i ; j++) {
    if(num[i] === num[j]) {
      num[i] = Math.floor((Math.random()*100)+1);
      while (num[i] > 45){
        num[i] = Math.floor((Math.random()*100) + 1) 
      }
      j = 0;
    }
  }
}

console.log(num)
// num.sort();

// for ( let i = 0 ; i < 6 ; i++ ) { 
//   document.write(num[i], ", ")
// }

// document.write()내부에는 HTML 먹일 수 있었습니다.

// Comparator 정의
// 정석 버전은 20250212.md에 있고,
// 오름차순의 경우 관례적으로 작성하는 방식
// function compare(a, b) {
//   return a - b;
// }

// // 내림차순의경우 관례적으로 작성하는 방식
// function compare2(a, b) {
//   return b - a;
// }

// 내림차순으로 정렬하고 싶으면 compare2()를 어떻게 정의하면 될지 고려하고,
// lottoNumbers2.sort(compare2);를 작성하여
// 내림차순한 상태를 브라우저에 출력하시오.

num.sort(function(a, b){
  return a - b;
});
for ( let i = 0 ; i < 6 ; i++) {
  document.write('<span class="ball" >' + num[i] + '</span>')
}
// 이제 span에 스타일을 먹일 에정입니다 -> css 폴더 생성 style.css 파일 생성