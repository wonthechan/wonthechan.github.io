---
title: '(Javascript) 자바스크립트 코딩 스타일 컨벤션 정리'
date: 2019-11-13
category: 'javascript'
---



사실 코딩 스타일이 어떻든 프로그램이 잘 돌아가기만 하면 장땡이라고 생각했으나 시간이 지날수록 내 코드를 다른 사람들이 읽어야 되는 일이 생기고 나도 다른 사람들의 코드를  읽게 되면서 어느 정도 코드를 작성함에 있어 규칙, 즉 컨벤션을 잘 지키는 것의 중요성을 체감하게 되었다.

일정한 규칙에 의해 적힌 코드는 가독성을 높이는 것은 물론이고 특히 복잡한 로직을 가진 프로그램의 흐름을 따라가고 파악할 때 걸리적거리는 것(?) 없이 방해가 되지 않도록 해주는 것 같다.

최근 자바스크립트 코드를 작성하고 있는데 파이썬이나 자바 같은 다른 언어들과 왔다 갔다 하며 코드를 작성하다 보니 헷갈리기도 하고 그럴 때마다 자꾸 구글링해서 찾으니.. 시간 낭비라고 느껴져서 따로 정리하고 이번 기회에 머릿속에 확실히 새겨두는 것이 좋을 것 같다.

------

> w3schools.com 도큐먼트를 참고하여 작성하였습니다.
>

### 변수 이름

기본적으로 변수나 함수명을 지을 때는 **camelCase**를 따른다. 또한 문자로 시작한다.

```javascript
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```



### 연산자 띄어쓰기

연산자 사이에는 항상 공백을 넣고 콤마를 쓰면 한번 띄어쓴다.

```javascript
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```



### 들여쓰기는 스페이스 두번!

코드 블럭을 구분하기 위해서는 스페이스바를 두번 눌러 들여쓴다.

*탭(tab)은 인터프리터에 따라 다르게 인식할 수 있으므로 최대한 사용을 지양한다.*

```javascript
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```



### 선언 규칙

선언문은 항상 세미콜론(;)으로 끝나야 한다.

```javascript
var values = ["Volvo", "Saab", "Fiat"];

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

이외에도

여는 bracket 은 띄어 쓰지 않는다거나 bracket을 열기전에 공백을 한칸 주는 규칙들이 있다.

아래는 컨벤션을 적용한 함수, 반복문, 조건문 예시를 제시하고 있다.

```javascript
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

```javascript
for (i = 0; i < 5; i++) {
  x += i;
}
```

```javascript
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```



### 객체 규칙

* 여는 bracket은 정의 하고자 하는 객체의 이름과 같은 줄에 위치시킨다.
* 속성과 값을 명시할 때는 중간에 콜론을 쓰고 한 칸 띄운다.
* String 형태의 값은 큰 따옴표안에 적는다.
* 마지막 속성-값 쌍에는 콤마를 붙이지 않는다.
* 닫는 bracket은 새로운 줄에 붙여 쓴다.
* 항상 세미콜론으로 끝을 맺는다.

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

객체 정의문이 짧은 경우에는 공백으로 속성들을 구분하여 한줄로 표현할 수 있다.

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```



### 라인 당 80글자 제한

코드가 혼잡해지는 것을 방지하기 위해 한줄에 80글자가 넘어 가는 경우 다음줄에 이어서 쓴다.

```javascript
document.getElementById("demo").innerHTML =
"Hello Dolly.";
```



### 네이밍 규칙

* 변수나 함수 이름은 **camelCase**를 따른다.
* 전역변수와 상수의 이름은 대문자로 작성한다.
* 일반적으로 하이픈(-)은 이름에 포함시키지 않는 것이 좋다.
* 라이브러리 이름과 충돌할 수 있으므로 $ 문자로 시작하는 이름은 피한다.



### 파일이름은 소문자로

대다수의 웹서버들은 case sensitive 하기 때문에 자바스크립트 파일의 이름은 소문자로 통일하여 쓰는 것이 좋다.




>  References
>
> *       https://www.w3schools.com/js/js_conventions.asp 