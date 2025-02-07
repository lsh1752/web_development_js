/**
 * 1 부터 5까지 출력하는 반복문 작성하시오.
 */

// for(let i = 1 ; i < 6 ; i++) {
//   console.log(i);
// }

/**
 * 10에서 2씩 줄어드는 반복문 출력하시오.
 * 10
 * 8
 * 6
 * 4
 * 2
 */

// for(let i = 10 ; i > 0 ; i= i-2) {
//   console.log(i);
// }

// for(let i = 10 ; i > 0 ; i--) {
//   if(i%2==0) {
//     console.log(i);
//   }
// }

// Nested for-loop 중첩 for문

/**
 * 2 x 1 = 2
 * 2 x 2 = 4
 * ...
 * 9 x 9 = 81
 */

// for(let i = 2; i < 10; i++) {
//   for(let j = 1; j < 10; j++) {
//     console.log(i + " x " + j + " = " + i*j)
//   }
// }

// for (let i = 0 ; i < 100 ; i++) {
//   if( i % 3 === 0 ) continue; // 3의 배수일 때마다 그 다음 반복문으로 넘어감
//   if( i > 10 ) break; // i 가 11일 때 반복문 종료
//   console.log(i);
// }

// const yourArray = ["김일", "김이", "김삼", "김사", "김오"];

// for ( const name of yourArray ) {
//   console.log(name);
// }

// 이상의 코드에서 중요한 것은(java에서도 말했습니다),
// 향상된 for문의 작성 때문에 배열처럼 다수의 데이터를 다루는 collections 에 해당하는 자료형은 변수(상수)명을 복수형으로 짓는 편입니다.

// for (const name of names) 로 쓸 때 영어상 읽기가 훨신 편하기 때문입니다.

// const person01 = {
//   name: "김육",
//   age: 25,
//   married: false
// };

// for (const key in person01) {
//   console.log(key, typeof key);
//   console.log(person01[key]) 
// }

// for of문이 배열의 요소 반환에 해당한다면, for in 문은 키-값 쌍으로 이루어져있는 객체에서 key를 순서대로 반환

// 그렇기 때문에 value를 출력하기 위해서는 객체명[키이름]으로 작성할 필요 있음.

/**
 * while문으로 작성하시오.
 * 2 x 1 = 2
 * 2 x 2 = 4
 * ...
 * 9 x 9 = 81
 */
// let i = 2;
// while(i < 10) {
//   let j = 1;
//   while(j < 10) {
//     // console.log(i + " x " + j + " = " + (i*j));
//     console.log(`${i} x ${j} = ${i*j}`);
//     j++;
//   }
//   i++;
// }

// while문에서의 continue / break 사용

// for (let i = 0 ; i < 100 ; i++) {
//   if( i % 3 === 0 ) continue; // 3의 배수일 때마다 그 다음 반복문으로 넘어감
//   if( i > 10 ) break; // i 가 11일 때 반복문 종료
//   console.log(i);
// } -> while문으로 작성하겠습니다.

// let a = 0;

// while ( a < 100 ) {
//   const toPrint = a++;

//   // continue / break 적용
//   if(toPrint % 3 === 0) continue;
//   if(toPrint > 10) break;

//   console.log(toPrint)
// }

// do - while 문
let b = 12;
do {
  console.log(b++);
} while ( b < 10 ) {
  console.log(b);
};
// 결과값 12
// 일반 while문의 경우 조건식을 확인한 '후' true라면 실행하는 반면 do - while문의경우에는 일단 실행 한 번을 시키고 그 후에 조건을 확인함.

// 이상의 코드에서 b = 12라면 '일단 출력'하고 while문 조건에 맞지 않기 때문에 반복문을 종료 합니다.

// 즉, 조건에 맞지 않더라도 일다 한 번은 실행시킴