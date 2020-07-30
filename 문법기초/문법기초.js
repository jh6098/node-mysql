// 변수 : 데이터를 메모리에 저장하는것.
// nodejs (javascript) 에서는 데이터는? 숫자,문자,true/false
// 프로그래밍 : 사람의 언어를, 컴퓨터의 언어로 바꿔주는 작업.
// 고등어 1마리에 3,000원 => 사람의 언어
// "고등어"  1  "마리에" 3000  "원" => 컴퓨터의 언어
// -------------------------------------------------------------------
// var/ let,const 차이점
//  큰틀로 봣을땐 변수재선언이 가능/불가능이다.

// var 
// var name = 'abc'
// console.log(name) // abc
// var name = 'qwe'
// console.log(name) // qwe  var는 변수 재선언O,재할당O.

// let
// let names = 'abc' 
// console.log(name)   // abc
// let names = 'qwe' 
// console.log(name)  // 에러걸림 let은 변수 재선언X.

// let과 const의 차이

// let    //변수 재선언X,재할당O
// let name = 'abc'
// console.log(name) // abc
// let name = 'qwe'
// console.log(name) // 에러 변수 재선언X.
// name = 'zxc'    // 변수 재할당
// console.log(name) // zxc 변수 재할당O.

// const   // 변수 재선언X,변수 재할당X.
// const name = 'abc'
// console.log(name) // abc
// const name = 'qwe'
// console.log(name) // 변수 재선언X
// name = 'zxc'
// console.log(name)  // 변수 재할당X
// -------------------------------------------------------------------
// let a = 11
// let b = 7

// let Area = a * b   넓이
// let Perimeter = 2 * ( a + b) 둘레
// console.log("넓이는 " + Area + " , 둘레는 " + Perimeter)
// -------------------------------------------------------------------
// undefined 언디파인드 : 데이터가 저장되어있지 않다.
// let ground = ""   공백을 찍고싶을때
// console.log(ground)
// -------------------------------------------------------------------
// 연산기호는 자바와 똑같다 + - * / % 더하기,빼기,나누기.곱하기,나머지
// **은 제곱이다 
// a = 75
// b = 20

// result = a + b
// console.log(result)

// result = a - b
// console.log(result)

// result = a / b
// console.log(result)

// result = a % b  
// console.log(result)
// -------------------------------------------------------------------

// result = a++  //  a를 result 에 저장하고, result = 75
//               //  a는 a에 1더하라. a = 75 + 1
// console.log(result)  75
// console.log(a)    76

// result = b-- // b를 result 에 저장,  result = 20
//              // b는 b에 1빼라.  b = 20 - 1
// console.log(result)
// console.log(b)


// result = ++a // a에 1을 먼저 더하라. a = 75 + 1
//              // a를 result에 저장하라. result = 76
// console.log(result)
// console.log(a)

// ++a 와 a++ 의 차이 먼저더하고,나중에더하고 차이
// -----------------------------------------------------------------
// console.log( a == b ) a랑b같다
// console.log( a > b )  a가 b보다 크냐
// console.log( a >= b ) a가 b보다 크거나 같냐
// console.log( a < b )  a가 b보다 작냐
// console.log( a <= b ) a가 b보가 작거나 같냐
// console.log( a != b ) a와 b가 다르냐
// -----------------------------------------------------------------
// a = 3
// b = 7
// c = 9
// d = 10
// 한문장 으로 : a는 5보다 크고, b는 8보다 작냐
// 한문장 으로 : c가 7보다 크거나, d가 5보다 작냐
// ~ 하고 and=&&  둘중하나라도 false면 false
// ~ 거나 or=|| 둘중하나면 true여도 true 
// console.log( a > 5 && b < 8 )
// console.log( c > 7 || d < 5 )
// -----------------------------------------------------------------
// 삼항 연산자 
// a = 75
// b = 20
// console.log( a > b ? 500 : 900 )
// a가 b보다 큰게 참이면500 거짓이면 900으로찍어라
// -----------------------------------------------------------------

a = 75
b = 1220
if( a > b ){
    console.log("A가 B보다 크다.")
}else{
    console.log("B가 더 크다.")
}

a = 50 
if(a == 30){
    console.log("1.")
}else if(a == 50){
    console.log("2.")
}else{
    console.log("100.")
}

// 1번 학생의 점수가 83점 입니다.
// 다음의 조건문을 작성하시오.
// 점수가 0보다 작거나 100보다 크면, "그런 점수 없음"출력
// 점수가 80 이상이면, "A학점입니다." 출력
// 점수가 80점 미만이면, "B학점입니다." 출력

let score1 = -30

if(score1 < 0 || score1 > 100){
    console.log("그런 점수 없음")
}else if(score1 >= 80) {
    console.log("A학점입니다.")
}else if(score1 < 80){
    console.log("B학점입니다.")
}

// 함수 functions 정의
function addNum(a, b){
    let result = a + b
    return result
}
// 함수의 호출 function call
let ret = addNum(3, 4)

let addnum2 = function(a, b){
    let result = a + b
    return result
}

ret = addnum2(5,6)
console.log(ret)

// es6 문법
let addnum3 = (a, b) => {
    let result = a + b
    return result
} 

ret = addnum3(10, 20)
console.log(ret)

//  객체 : 클래스가 메모리로 올라온 상태

let cook = new Object();
cook.name = "홍길동"
cook.age = 27
cook.make = ()=>{
    return "빵을 만든다"
}

console.log(cook.name + "  " + cook.age +" "+ cook.make())
// JSON : Javascript object notation
let cook2 = { 
    name : "김나나", 
    age : 24,
    make : ()=>{
        return "한식을 만든다"
    }
}

console.log(cook2.name + "  " + cook2.age+" "+cook2.make())


// key : value
let football = {
    color : 'Blue', 
    size : 36,
    isAcitve : true,
    add : function(x,y){
        let ret = x + y
        return ret
    }
}
result = football.add(3, 4)
console.log(result)

let color = football.color
console.log(color)




// class Football {
//     String color;
//     public Football(){
//         color = "blue";
//     }
//     int add(int x, int y){
//         int ret = x +y;
//         return ret;
//     }
// }

// 단일데이터 
let name = 'James'

// Array (배열) : 데이터를 여러개!!!! 를 저장하기 위해서 사용.
let names = [ 'James', 'John','Michael'  ]

// Array에 저장되어 있는 값을 가져오는 코드
names[0]        // index 인덱스     :  0부터 시작
names[1]
names[2]

console.log(names[0])
console.log(names[1])
console.log(names[2])





let employee = [ 
    {name:'James', age:24} , 
    {name:'John',age:25} ,
    {name:'Michael', age: 30} 
]
employee[0]
employee[1]
employee[2]
console.log(employee[1])

employee[0].name
employee[0].age
employee[1].name
employee[1].age
employee[2].name
employee[2].age

console.log(employee[1].name)




let people = [
    {name:'Mike', age : 24, pet:['dog', 'cat']},
    {name:'John', age : 30, pet:['cat']},
    {name:'Harry', age : 29, pet:['bear', 'cat', 'snake']}
]
console.log( people[0] )
// 1. 첫번째 사람의 나이를 출력

// 2. 두번째 사람의 이름을 출력

// 3. 세번째 사람의 pet 을 출력

// 4. 첫번째 사람의, 첫번째 pet 을 출력


people = [
    {name:'Mike', age : 24, 
        pet:[ {name:'A', type:'cat'} , {name:'B', type:'dog'} ]},
    {name:'John', age : 30, 
        pet:[ {name:'C', type:'cat'} , {name:'D', type:'dog'}   ]},
    {name:'Harry', age : 29, pet:[    ]}
]

// 1. 첫번째 사람의 두번째 pet 이름을 출력
console.log(people[0].pet[1].name)
// 2. 두번째 사람의 첫번째 pet 은 어떤 동물인가?
console.log(people[1].pet[0].type)




names = [ 'James', 'John','Michael'  ]

// 두번째 이름을 Mike 로 변경.
names[1] = "Mike"

console.log(names)

// Chris 를 names에 추가
names.push('Chris')

console.log(names)

// 원소 삭제
names.pop()

console.log(names)

// array의 모든 원소를 하나로 합친다.

let ret_names = names.join(',')

console.log(ret_names)

// filter

let ret_filter = names.filter(name => name.length > 4)
console.log(ret_filter)


// unshift() 

let arr1 = [1, 2, 3]

arr1.unshift(100)

console.log(arr1)

// splice : 내가 원하는 위치에서부터 데이터를 추출 (start, count)
let arr2 = ['one', 'two', 'three', 'four']
// 두번째 데이터부터 데이터를 끝까지 가져온다.
let ret_arr2 = arr2.splice(1, 3)

console.log(arr2)  // [ 'one' ]
console.log(ret_arr2) // [ 'two', 'three', 'four' ]


// 반복문

names = [ 'James', 'John','Michael'  ]


// Array에 저장된 모든 원소 출력
for(let i = 0; i < names.length; i++){
    console.log(  names[i]  )
}
// Array에 내장된 반복(loop) 메소드.
names.forEach( function(name){
    console.log(name)
} )

num_arr = [2, 5, 8, 10]

// 각원소를 제곱해서 화면에 출력
for(let i = 0; i < num_arr.length; i++){
    let data = num_arr[i] ** 2
    console.log(data)
}
