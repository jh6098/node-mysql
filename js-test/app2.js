// js-test > npm init 입력해줫음 (터미널에)

// 다른 파일에 있는 정보를 가져오는 방법.
const utils = require('./utils.js')
const getNotes = require('./notes.js')
//  ./ 라는 뜻은, 현재의 파일인 app2.js가 있는 디렉토리. 
// ../(윗경로로 이동) 
// const name = require('./utils.js')  2번 상수처리한거 가져오는거
// 상수선언 한거 받아오려면 똑같이(const~) 써주되 
// 다른파일에서 module.exports = name 이걸 입력해줘야됨.

let sum = utils.add(4, -2)
console.log(sum)
 
utils.js //파일안에 있는,name 값을 사용하려고한다.
console.log(utils.name)

console.log(utils.minus(1,10))


let ret = getNotes()
console.log(ret)       

// 새로운 파일 notes.js 라고 만든다.  4번
// notes.js파일 안에 getNotes 라는 함수를 만들고
// 이 함수는 "Hello ~" 를 리턴하는 함수입니다.
// app2.js에서 이 함수를 불러와서 콘솔에 로그를 찍으시오.






