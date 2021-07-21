# css에 대한 TIL
 main.css에 작성된 코드를 기준으로 공부한 점을 작성합니다.

## margin: auto -> 수평 중앙 정렬
`````css
    .container{
      background: tomato;
      width: 980px;
      margin: auto //수평 중앙 정렬
    }
`````
 해당 클래스(container)는 header클래스의 안에 위치해 있고,
width를 980px로 설정하고, margin: auto로 두어 정중앙에 위치하게 하였다.

## float -> 보통 수평으로 바꿔줄 때 사용 
 float는 속성이 적용된 해당 요소(elment)가 보통 흐름으로부터 빠져 텍스트 및 인라인(inline)요소가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야함.

밑에처럼3가지로 사용됨.
 float: none; -> 자기 컨테이너 위에 배치  
 float: left; -> 자기 컨테이너 왼쪽에 배치
 float: right; -> 자기 컨테이너 오른쪽에 배치

**하지만 여기서문제가 발생**
  float는 요소를 띄워주면서 수평으로 바꿔주기 때문에 자기 컨테이너 배경에 포함되지 못하는 문제점이 발생하는데 이것을 해결해주는 것이*clearfix*

clearfix는 보통 이렇게 사용된다.
`````css
    .clearfix::after{
	content: "";
	display: block;
	clear: both;
    }
`````


##padding 
 padding: 8px 10px; -> top, bottom = 8px / right, left = 10px씩 늘어남

 padding을 추가하면 내부컨텐츠 여백이 늘어남. 

## css에서 클래스의 자식 요소 접근

`````css
    .logo img{}
`````
     logo라는 클래스에 포함되어있는 img태그에만 해당 style 적용


## display 속성

 - none: 보이지 않음
 - block: 블록박스
   - 기본적으로 가로 영역을 모두 채움
   - block요소 다음에 등장하는 태그는 줄바꿈

 - inline: 인라인 박스
   - 줄바꿈 x 
   - width와 height를 지정할 수 없음.

 - inline-block: block과 line의 중간 형태
   - 줄바꿈x
   - width와 height 지정 가능
