파이썬

1. ** <- 제곱

2. //  <- 몫

3. ''',  """
   -> 파이썬은 스크립트 언어이기 때문에 한줄씩 읽어서 보여준다.
   -> 고로 \n, \t(이스케이프 코드)와 같은 것을 사용하여 한줄로 문자열을 표현하면 가독성이 떨어지기 때문에,
 '''/ """를 사용하여 줄바꿈이 많고, 긴 문자열을 표현한다. 

4. "-"('-') * 원하는 갯수 
  - 원하는 문자열을  원하는 갯수만큼 출력할때 사용.
  - a = "-" * 30 -> -라는 문자열이 30개 생김.
  - "---------------------------------------------"

5. 문자열 - 내장함수
  1) count : 특정 문자 수를 반환
   `````python
    a = "Fast"
    result = a.count('a') -> 1 반환
   `````
  
  2) find, index : 특정 문자 위치를 반환
   `````python
    a = "Fast" 
    result = a.find('s') -> 2 반환, find는 없는 문자를 찾을 때
                                      -1을 반환
    result = a.index('s') -> 2 반환, index는 없는 문자를 
                                       찾을 때 오류를 발생
   `````

  3) join : 모든 문자사이에 입력한 문자를 삽입 
   `````python
    a = "," 
    result = a.join('abc') -> a,b,c 
    result = a.join(['abc', 'def']) -> abc, def
   `````

  4) upper : 대문자로 변환한 값 반환
    `````python
     a = fast
     result = a.upper() -> FAST값 반환
   `````

  5) lower : 소문자로 변환한 값 반환
  `````python
      a = FAST
      result = a.lower() -> fast값 반환
  `````

  6) replace : 문자열을 치환한 결과 반환
  `````python
      a = "FAST"
      result = a.replace("Fast", " Real) -> Real
  `````

  7) split : 문자열 나눈 결과 반환
  `````python
      a = "vally is cat"
      result = a.split(" ") -> [vally, is, cat]
  `````

  8) 공백 제거
     - lstrip : 왼쪽 공백 제거 값 반환
     - rstrip : 오른쪽 공백 제거 값 반환
     - strip : 양쪽 공백 제거한 값 반환  



6. 리스트 - 내장함수
  1) append : 요소를 뒤에 추가
  `````python
     result = [1,2,3]
     result.append(4) -> [1,2,3,4]
  `````
 
  2) sort : 요소들을 정렬
  3) reverse : 요소들을 뒤집음
  4) index : 입력값의 위치를 반환(첫번째로 찾은 위치)
  `````python
     a = [10,11,11,100]
     result = a.index(11) -> 1이 반환
  `````

  5) insert : 특정 위치에 요소를 추가
  `````python
     result = [100, 192, 101]
     result.insert(1, 'a') -> [100, 'a', 192, 101]
  `````

  6) remove : 입력값을 삭제(첫번째로 찾은 위치)
  `````python
      result = [100, 192, 100, 101]
      result.remove(100) -> [192, 100, 101]
  `````

  7) pop : 마지막 요소를 꺼내고 삭제
  8) count : 입력값의 갯수
  `````python
      result = [100, 192, 100, 101]
      result.count(100) -> 2반환
  `````

7. 튜플
  - 리스트와 매우 흡사
  - 하지만, 리스트와 달리 수정, 삭제, 추가 불가능
     => *오직 읽기만 지원*
  - 초기화시 변경 불가능
  - 그렇다면 왜 필요할까?
      - 내부적으로 성능이 더 좋음 => 데이터가 많을 경우 영향이 있음
      - 실수 방지 : 변경하면 안되는 값에 대한 보호 기능
      - a = (1, 123, 'fastcampus', 'alghost')

  - 연산, 인덱싱, 슬라이싱 전부 리스트와 동일 또한 내장함수의 경우 값을 변경하는 함수 제외하고 사용가능

8. 딕셔너리 -> 키와 값으로 이루어진 자료형
   - a ={'name' : 'taehwa', 'company' : 'fastcampus'}
   - 내장함수 
      1) keys : 딕셔너리의 key들을 배열로 만들어 반환
      `````python
          a = {'a' : 123, 'b' : 456}
          result = a.keys() -> dict_keys(['a', 'b'])
      `````

      2) values : 딕셔너리의 values들을 배열로 만들어 반환
      `````python
          a = {'a' : 123, 'b' : 456}
          result = a.values() -> dict_values([123, 456])
      `````

      3) items : key, value 쌍을 반환
      `````python
          a = {'a' : 123, 'b' : 456}
          result = a.items() -> dict_items([('a', 123), ('b', 456)])  (반환값이 리스트안에 튜플이 있는 형태) 
      `````

      4) get : key에 대한 값을 반환(값이 없는 경우 기본값 지정이 가능)
      `````python
          a = {'a' : 123, 'b' : 456}
          result = a.get('c', 789) -> 789반환 (a 딕셔너리에 c라는 key값이 없으면 기본값인 789를 반환)
      `````

9. 조건문
  - if 조건문 : 
        실행할 문장
    elif 조건문 :
        실행할 문장
    else : 
         실행할 문장

10. 반복문 for 활용
  - for 변수명 in 리스트,튜플, 문자열 : 
          실행할 문장...

  - range 함수
     - for문과 매우 친한 함수 
     - 100번 반복을 위해 [1, 2, 3, 4.... 100]을 만들 수 없다.
     - range()함수가 만들어줌 => range(100): [0,1,2,3,4....99]
    
     - for looper in range(100) : 
             print(looper)   => 0 ~ 99까지 출력됨.

11. 반복문 딕셔너리 활용
   dict_val = {"name" : "teahwa", "company" : "fastcampus"}가 있을 때
  - keys      -> for key in dict.keys() :
  - values    -> for val in dict.values():
  - items     -> for(key, val) in dict.items(): 