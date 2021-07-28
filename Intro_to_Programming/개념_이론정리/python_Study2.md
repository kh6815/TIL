# 파이썬 basic 기초


## 함수
  - def 함수이름 (입력값 변수, 입력값 변수, ....) : 
       <실행할 코드>
        ...
  
  - return 
    - 아무 값 없이 return만 사용가능!
    - 함수를 빠져나갈 때 사용가능

## 자주 쓰이는 내장함수
  - int   : 문자열 변수를 숫자형으로 변환하여 반환   
            ex) num = int(<VAR>)
	tip!  문자열 함수인 isdigit() : 해당 문자열이 숫자인지 아닌지를 판단하여 
	true, false반환
       	ex) if str_var.isdigit() :
            		  ~~~~~~~~
  - str   : 숫자형 변수를 문자열로 변환하여 반환   
            ex) string = str(<VAR>)
  
  - list  : 문자열, 튜플 변수를 리스트로 변환하여 반환 
            ex) list_var = list(<VAR>)
  
  - tuple : 문자열, 리스트 변수를 tuple로 변환하여 반환 
            ex) tuple_var = tuple(<VAR>) 
  
  - len   : 변수의 길이를 반환(숫자형 변수 x)                   
            ex) length = len(<VAR>)
  
  - input : 사용자로부터 문자열을 입력받음                     
            ex) user_input = input("입력값 : ")
  
  - range : 리스트를 만들어주는 함수                              
            ex) list_var = range(99) ->0 ~ 99까지 리스트 생성
  
  - max   : 리스트, 튜플, 문자열에서 최대값을 반환             
            ex) max_var = max(<VAR>)
  
  - min   : 리스트, 튜플, 문자열에서 최소값을 반환             
            ex) min_var = min(<VAR>)
     - max, min 은 다른 자료형을 갖는 리스트, 튜플, 문자열은 사용할 수 없다.
 
## 클래스(= 객체)
  - 변수와 함수의 집합, 즉 변수와 함수를 가진 나만의 자료형
  - class 클래스 이름 : 
	def __init__(self) : 
		self.변수명 = 변수값
	def 함수명(self, 인자값 변수명 , ...) : 
		실행할 코드
		실행할 코드
		실행할 코드
	def 함수명(self, 인자값 변수명 , ...) : 
		실행할 코드
		실행할 코드
		실행할 코드
  - 함수에 써있는 self는?
    - 클래스의 변수, 함수에 접근하기 위해 필요한 변수
    - 꼭, 잊지말고 써주어야 외부에서 class 변수를 사용할 수 있다.

## 모듈 
 - 클래스, 함수, 변수의 집합 => 모듈, 라이브러리, 패키지 등 이라고 불린다.
 - 전세계 많은 개발자가 편리한 모듈을 제공
 - 한 파일에 계속 개발하면 알아보기 힘들다. 고로 모듈로 나눠서 개발할 수 있다.
 - 다른 파일의 코드 사용
    form <py파일 경로> import <변수, 함수 혹은 클래스명>
     `````python
      ex) from my_email import Email
           from my_news import News
           from my_excel import Excel

           m_email = Email()
           m_news = News()
           m_excel = Excel()
     `````

  - import 만 사용하기
     - 모듈 안의 클래스, 함수 등을 명시하지 않고 모듈 자체만 가져오기
     - 모듈 안의 클래스, 함수 등을 사용할 때 모듈을 명시해야한다.
     `````python
      ex) from my_email import Email
           import my_news
           from my_excel import Excel

           m_email = Email()
           m_news = my_news.News()
           m_excel = Excel()
     `````

  - from ~ import 심화 
    - my_email.py가 testlib 폴더 밑에 있을 때 사용하고 싶은 경우
      ex) from testlib.my_email import Email 

  - __name__ 내장변수 활용
     - __name__은 내장변수로 해당 클래스를 어디에서 실행했는지 
       출력을 다르게 해서 나타냄.
     - __name__ 내장변수 출력타입 2가지
        1) 다른 클래스에서 from ~ import한 모듈 형태로 쓰였을 때 
	   : <py파일 경로>, 즉 python 파일명
        2) __name__이 사용된 클래스 자체를 실행했을 때  : __main__으로 출력
    
     - 위2.번 예제 
        - 아래와 같이 테스트 코드를 작성하면 직접 실행할 때만 실행됨.
     `````python
        class Alghost ():
	data = 100
	
	def print_data(self):
	      print(self.data)

        if __name__ == '__main__': <- 직접 이 파일을 실행할 때만 동작 하는 구문,
	                              from ~ import에 의해서는 실행안됨!
	test = Alghost()
	test.print_data()
     `````


## 파일 입출력
  - r모드 (파일 입력)
   `````python    
    #1 
    #datafile = open('data.txt','r', encoding='utf-8')
    #data = datafile.read()
    #print(data)
    
    #2
    #line = datafile.readline()
    #line = datafile.readline().strip() #strip()함수 -> 공백제거
    #print(line)


    #3
    line = 'init'
    while True: # while line: 으로 사용가능 -> 빈 문자열만 아니면 조건이
                                               참이 된다.
        line = datafile.readline().strip()
        if not line: break
        print(line)

    #위코드랑 같음
    line = 'init'
    while line: 
        line = datafile.readline().strip() #마지막라인을 읽어오면 값이 
	                                    없으므로 while조건이 거짓이 됨.
        print(line)

    datafile.close()
   `````

  - w 모드 (파일 출력)
   `````python 
    # w모드
    user_input = input('Input: ')
    datafile = open('data.txt', 'w', encoding='utf-8')

    datafile.write(user_input) #기존 파일이 있다면 덮어쓰기 

    datafile.close()
   `````

  - a모드 (파일 출력)
   `````python 
    # w모드
    user_input = input('Input: ')
    datafile = open('data.txt', 'a', encoding='utf-8')

    datafile.write(user_input) #기존 파일이 있다면 덮어쓰기 

    datafile.close()
   `````

## csv 파일 
  - comma-separated values의 약자
  - ','와 개행 문자로 구분된 파일
  - 엑셀과 유사
  - ','로 컬럼을 구분하고 개행 문자(\n)로 행을 구분한다.
  - ex
   `````python 
      # ex1 r모드
      datafile = open('data.csv', 'r')

      for line in datafile.readlines():
          data = line.strip().split(',')
          print(data[0])
          print(data[1])
          print(data[2])
          print('-'*10)

     datafile.close()

     # ex2 w모드
     values = []
     values.append(('alghost', 'fastone'))
     values.append(('yskim', 'fastcampus'))
     values.append(('jelee', 'fastfive'))

     datafile = open('result.csv', 'w')

     for line in values:
         data = ','.join(line) # join()은 입력받은 자료형(리스트, 튜플, 문자)안
	           에서 각각 값 사이사이에 나자신(여기서는 ',')을 넣어주는 함수 
         datafile.write(data + '\n')

     datafile.close()

    `````
