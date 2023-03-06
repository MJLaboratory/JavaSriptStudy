/*
window.alert() 
window.console.log('Minji Kim')   // console에 기록한다. 
console.log('cat');
console.clear()
console.log(0);
console.log(3.14);

//변수
let number1 = 10;
let number2 = 0;
let number3 = -10;
number1 = 3.14;

let string1 = 'any string';
let string2 = '12345...!?';

console.log(string1)
string1 = 10
console.log(string1)

//prompt
const promptMessage = "프롬프트에 표시할 문자열 "
const result = prompt(promptMessage);
console.log(result)


//template literal 템플릿 리터럴
let str = '오예~'
const str3 = `이게 백틱입니다. ${prompt('감탄사!')}`
console.log(str3)


//연산자 - 산술 연산과 대입연산
let result = 3
result += 3
console.log(result)
result -= 2
console.log(result)


//null과 undefined, boolean(true, false)
let number;
console.log(number);   //데이터 아직 정의되지 않음
console.log(typeof(number));
number = 0;
console.log(number)
console.log(typeof(number));
number = null;   //데이터가 없음
console.log(number)
console.log(typeof(number));
let value;
value = true;
console.log(value);
value = false;
console.log(value);
console.log(typeof(value));

//DOM Document Object Model
//브라우저가 HTML 코드를 해석해서 요소들을 트리형태로 구조화
//렌더링
//DOM이 자바스크립트를 이용해서 사용자와 상호작용

//window.document

//document.querySelector- 선택자를 받아서, 선택자와 일치하는 문서 내 첫 번재 요소를 반환한다. 

console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))

//document.getElementById
//textContent
console.log(document.getElementById("text"))
//console.log(document.getelementbyId("paragraph"))

const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent)
h1.textContent = "I am changing the content."
console.log(h1.textContent)
console.log(p.textContent)


//비교 연산식 -> boolean 반환
// >, <, >=, <=
// ==, !=, ===, !==
// ==: 추상적 같음 비교, 자료형이 다르더라도 같다고 판단
// ===: 엄격한 같음 비교, 자료형과 데이터가 모두 일치해야만 같다고 판단한다.

//조건문

let number = 5

if (number ==3) {
    console.log("It is true!");
}else {
    console.log("It is false!");
}


//반복문- while과 for
let number = 1;

while (number <10) {
    console.log(number);
    number+= 1;
}

while(confirm("Message!")) {
    console.log("You have pressed Enter.")
}
console.log("You have not pressed Enter.")

for(let i = 8; i >= 1; i-= 2){
    console.log(i)
}


//함수- 코드에 이름 붙이기

//함수 선언식
// function 함수명(){  }

//함수 표현 식
//const 함수명 = function(){   }

sayHello()

function sayHello(){
    console.log("hello")
}

const sayBye = function() {
    console.log("goodbye")
}

sayBye()


function getThree(){
    return 3;        //함수를 끝내고, 데이터를 반환한다.
}
console.log(getThree())

const result = window.confirm("check it out")
console.log(result)

function noReturn() {
    console.log("Returns Nothing")
}
const result = noReturn()
console.log(result)

function sayAnything(){
    console.log("blahblah")
}

sayAnything()

function saySomething(statement, num){
    for (let i = 0; i < num; i++){
        console.log(statement)
    }
}
saySomething("hello!", 3)

function oddEven(number){
    if (number % 2 == 0){
        return "짝수"
    }else {
        return "홀수"
    }
}

console.log(oddEven(10))
console.log(oddEven(7))


//Events- click events, keydown events
//event handler register
//타겟.onClick = 이벤트 핸들러


const inputType = document.querySelector("#typing")
const inputClick = document.querySelector("#push")

const handleTyping = function() {
    console.log("Currently Typing!")
}

const handleClick = function(){
    console.log("Currently Clicking!")
}

inputType.onkeydown = handleTyping
inputClick.onclick = handleClick


//addEventListner

//target.onclick = function(){}
//target.addEventListner('click', function(event){})

const btn1 = document.getElementById("one")
const btn2 = document.getElementById("two")
const btn3 = document.getElementById("three")

const handleClick= function(event){
    console.log(event.target)
}

btn1.addEventListener('click', handleClick)
btn2.addEventListener('click', handleClick)
btn3.addEventListener('click', handleClick)
btn2.addEventListener('click', function(){
    console.log("Another handler added!")
})
//btn2.removeEventListener('click', handleClick)

const p = document.createElement("p")
document.body.appendChild(p)       //append vs. appendChild


const button = document.getElementById("push2")
const div = document.getElementById("area")

button.addEventListener('click', function(){
    console.log("Generating a div!")
    const newDiv = document.createElement("div")

    newDiv.style.backgroundColor = "red"
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"

    div.appendChild(newDiv)
})

//value

//textContent 또는 innterText, value
//console.log(target.value)  - 사용자 입력값 읽기
//target.value = "변경값" - 사용자 입력값 변경

//form과 submit
//action과 event 대체

const textInput = document.getElementById("text2")
const button = document.getElementById("button2")

button.addEventListener("click", function(){
    //console.log(textInput.value)
    textInput.value = "클릭하면 이렇게 바뀝니다."
})


const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()   //redirection 차단
    console.log(form.name.value)
    console.log(form.town.value)
})
*/

//삼항연산
//조건식? 참일 경우 결과: 거짓일 경우 결과
/*
let result;
result = 3 > 2 ? "true": "false"

console.log(result)

const select = document.querySelector("select")
const button = document.querySelector("button")

button.addEventListener('click', function() {
    console.log(select.value)
    let result;
    result = select.value =="foot" ?
    "You chose football!":
    "You did not choose football!"
    alert(result)
})
*/

//생성자
function Dog(dogName, dogBreed) {
    this.name = dogName
    this.breed = dogBreed
}
const dog = new Dog("루이", "비숑")

console.log(dog)

//기본 생성자, built-in object

//Date
const now = new Date();

console.log(now)

const then = new Date(2023,2,6);       //2023년 3월 6일

console.log(then)

const h1 = document.querySelector('h1')

const hour = now.getHours()
const minu = now.getMinutes()
const seco = now.getSeconds()

const nowTime = `${hour}:${minu}:${seco}`

h1.textContent = nowTime;

console.log(now.toLocaleString())

//

setTimeout(function(){
    console.log(1234)
}, 2000)    //2초 뒤에 1234 출력


let interId;
interId = setInterval(
    function() {
        console.log("Hello")
    }, 2000
)                       //2초마다 Hello 출력

console.log(interId)

const button = document.querySelector('button')

button.addEventListener('click', function(){
    clearInterval(interId)
})


