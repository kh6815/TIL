# javascript 새로 배운점 정리


## let, const
 *필자는 javascript를 이전에 배워서 var 형식으로만 배웠는데 새로운 문법이 있어    정리한다.*
 var -> 변수 이름이 중복되도 사용가능, 중간에 값이 바뀌어도 가능 


 - let: 변수(변수이름 중복x ) ex) let value; value= 2 / value값은 바뀔수 있다.
 - const : 상수(한번 설정한 값은 바꿀 수 없다.) ex) const a= 1 /a값 바꿀 수 없다


 var는 옛날에 js에서 많이 사용됬는데 최근에는 사용하는 것을 권장하지 않는단다..
 let과 비슷하지만 같은 이름의 변수를 계속 생성 할 수 있기 때문에 제약을 둔 것 같 다(예로 var a = 1, var a = 2가 오류 없이 사용됨;;)

## 논리 연산자 게산 순서
 *만약 !(true && false || false && true || !(false)) 라는 문제가 나오면 어떻게   풀 것 인가..*

 계산순서는 NOT(!) -> And(&&) -> OR(||)순이다.
 고로 위 문제의 답은!(false|| false || true) -> !(true) -> **false**이다.

## === vs ==
 필자는 보통 비교를 할 때 ==를 사용했는데.. *타입까지 정확히 비교하려면 ===를 쓰 는게 현명한것 같다.*

 === -> 타입까지 비교함으로 더 정확, 왠만하면 이걸 사용
 ==  -> 타입은 비교안함.

 ex) a = false, b = 0 -> a==b (true)
     a = 1, b= "1" -> a==b (true)
     이렇게 보니까... 심각 

 물론!== 처럼 부정도 가능하다.

## js ES(버전)xx 새로운  문법
 - 함수에서 매개변수(name)를 `${name}`처럼 쓸수 있다.
   `````javascript
    const hello = function(name){
	console.log(`Hello, ${name}!`);
    }
   `````
   처음 본 js 문법이였다.

 - java의 람다식과 비슷한것 같다.
   `````javascript
    const add = (a, b) => {
	return a + b;
    } //또는

    const add = (a, b) => a + b
   `````

 - 비구조와 할당
   이것도 처음 접한 문법인데 가끔 유용할 것 같아 작성한다.
   `````javascript
    const ironMan = {
	name = 토니스타크
	actor = 로버트 다우니 주니어
    }

    const {name} = ironMan

## Object 함수
 let doggy = {
   name = ~~~
   age = ~
   ..
 } 라는 객체가 있을 때

 - Object.entries(doggy); -> 객체가 가지고 있는 모든 프로퍼티를 키와 값 쌍으로 
                             배열 형태로 반환하여 줌.
			     {name, ~~~}, {age, ~}
 - Object.keys(doggy);    -> 객체의 key값만 배열로 보여줌 {name, age}
 - Object.values(doggy);  -> 객체의 values만 배열로 보여줌 {~~~, ~}

## 내장함수
 - forEach 
   : 배열 반복
   `````javascript
     const a = [1, 2, 3, 4, 5];
     
     a.forEach(function(s){
	console.log(s);
     });
   `````
 - Map 
   : 새로운 배열 반환
   `````javascript
     const a = [1, 2, 3, 4, 5];
     const b = a.map(element => s*s)
   `````
 - filter 
   : 조건 만족하는 요소들만 모아 배열생성 후 반환
   ````javascript
     const a = [1, 2, 3, 4, 5];

     const b = a.filter(s => s%2 === 0; )
   `````
 - reduce 
   : 배열의 각요소에 대해 리듀서(reducer) 함수를 실행하고하나의 결과값을             반환
   `````javascript
     const a = [1, 2, 3, 4, 5];
     const result = a.reduce((accumulator, currentValue) => 
     accumulator + curreValue), 0);
   `````
   조금 헷갈리기 하지만 천천히 들여보면 이해가 된다.
   accumulator : 누적되는 매개변수
   currentValue : 현재 순환하는 인덱스의 값이다.
   두번째 매개변수 0은 accumulator의 초기값이 된다. 

   고로 0 + 1 -> 1 + 2 -> 3 + 3 -> 6 + 4 -> 10 + 5 -> 15 
   값은 15가 됨.
 
 - splice 
   : 해당 구간 인덱스의 요소를 다른 요소로 바꾸거나 삭제하고 새로운 배열             을반환
   `````javascript
     const a = [1, 2, 3, 4, 5];
     const b = a.splice(0,2);
   `````
    - splice(시작지점 인덱스, 시작지점으로 부터 제거할 요소의 수)
    - b -> [1, 2]; 
      a -> [3, 4, 5];
      처럼 splice는 기존 배열에 영향을줌.

 - slice 
  : 해당 구간 인덱스만을 가지는 새로운 배열 반환
   `````javascript
    const a = [1, 2, 3, 4, 5];
    const b = a.slice(1, 3);
   `````
   slice(시작지점인덱스, 배열의 첫번째 인덱스로부터 해당 인덱스-1)
   b -> [2, 3];
   a -> [1, 2, 3, 4, 5];

   *slice vs splice 와차이점*
    - slice의 두번째 인덱스는 배열의 첫부분부터 센 인덱스-1
      **vs**
      splice의 두번째 인덱스는 시작지점부터 제거할 요소 수

    - slice는 기존 배열에 영향x
      **vs**
      splice는 기존 배열에 영향

 - findIndex
   `````javascript
     const a = [
       {name : '호랑이'},
       {name : '사자}
     ]
     a.findIndex(ary => ary.name === '사자')
   `````
   사자라는 값이 포함된 인덱스의 번호를 알려줌.
   고로 출력해보면 1이 나옴
 
 - find
  find는 findIndex와 유사하지만 인덱스가 번호가 아닌 실제 값을 리턴한다.

 - shift, pop , unshift, push
   - shift   : 배열의 첫번째 요소 제거
   - pop     : 배열의 마지막 요소 제거
   - unshift : 배열의 첫번째 요소에 삽입
   - push    : 배열의 마지막 요소에 삽입

 - join 
   : 배열을 문자열로 리턴하는데 메서드의 인자로 넘겨준 값으로 각 요소 사이에 
   구분을 둘 수 있다.
  `````javascript
    const a = [1, 2, 3, 4, 5]
    console.log(a.join('A'));
  `````
  출력값은  1A2A3A4A5

  공백 값을 인자로 넣어서 사용하면 편할게 사용 가능.

 - concat 
   : 여러개의 배열을 하나로 합쳐주는 함수.
   기존 배열은 건들이지 않음.

## prototype
 -> 객체 생성자를 만들시 그 안에 익명함수를 넣게 되면, new 객체 생성시 계속해서 
    함수가 만들어지기 때문에 비효율적이다.
    고로 prototype으로 함수를 한번만 생성하고 사용할 수 있게 한다.
 -> 쉽게 말하자면 객체들끼리 공유할 수 있는 값이나 함수이다.

## class
 -> constructor를 사용해서 객체 생성자를 만들고, 
    내부에 함수를 구현하면 자동으로 prototype형태로 저장된다.
 `````javascript
   class Animal{
	constructor(type, name, sound){
          this.type = type;
	  this.name = name;
	  this.sound = sound;
	}
	say() {
	  console.log(this.sound);
	} 
   }

