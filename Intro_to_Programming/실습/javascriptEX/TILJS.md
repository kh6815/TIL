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

## js 새로운  문법
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
 - forEach : 
