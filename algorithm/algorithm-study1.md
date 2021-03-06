# 자료구조

## 복잡도
  - 시간복잡도 : 알고리즘에 사용되는 연산 횟수
  - 공간복잡도 : 알고리즘에 사용되는 메모리의 양

  - 시간복잡도를 표현할 때는 최악의 경우를 나타내는 
     Big-O 표기법을 사용한다.  

     O(1) -> 반복문 없음
     O(n) -> 반복문 하나
     O(n^2) -> 반복문 두개
     ....

     시간 복잡도를 표기할 때는 항상 큰항과 계수만 표시
    -> O(3n^2 + n) = O(n^2)

  - 공간 복잡도를 표기할때는 MB단위로 표기
    int a[1000] : 4KB
    int a[1000000] : 4MB
    int a[2000][2000] : 16MB

## 연결리스트
  - 배열을 사용하는 경우(순차적으로 저장하기 때문) 메모리 공간이 불필요하게 
    낭비 될 수 있음.
  - 배열 기반 리스트의 특징
     - 장점
         1) 배열로 만들었으므로 특정한 위치의 원소에 즉시 접근 가능
     - 단점 
         1) 데이터가 들어갈 공간을 미리 메모리에 할당해야 한다는 단점.
         2) 원하는 위치로의 삽입이나 삭제가 비효율적
 
  - 그래서 연결리스트를 사용한다!!
  - 연결리스트의 특징
     - 일반적으로 연결리스트는 구조체와 포인터를 함께 사용하여 구현함.	     
     - 장점 
         1)  연결리스트는 리스트의 중간 지점에 노드를 추가하거나 삭제할 수 
	     있어야 합니다.
         2)  필요할 때마다 메모리 공간을 할당 받음.
         3)  삽입과 삭제가 배열에 비해 간단
     
     - 단점     
         1) 배열과 다르게 특정 인덱스로 즉시 접근하지 못하며, 
	    원소를 차례대로 검색해야함.
         2) 추가적인 포인터 변수가 사용됨으로 메모리 공간 낭비
 
  - 단일 연결 리스트 
     - 포인터를 이용해 단방향적으로 다음 노드를 가르킴.
     - 연결리스트 시작노드를 헤드(Head) 라고 별도로 관리
     - 다음 노드가 없는 끝 노드의 다음 위치값으로는 NULL을 넣음.
       ex) data|next(Head) -> data|next(일반노드) -> data|next(일반노드) -> NULL

     - 단일 연결리스트 삽입, 삭제 과정
        1) 맨 앞에 삽입시, 삽입할 노드의 next == Head->next와 같게 해주고 Head->next를 삽입할 노드의 주소로 옮겨준다.

        2) 맨 앞 삭제시, Head->next == node(첫번째 삭제할 노드) -> next와 같게 해주고, 삭제할 노드를 메모리 해제 시켜주면된다.

  - 양방향 연결리스트
     - 머리(Head)와 꼬리(Tail)를 모두 가진다는 특징이 있음.
     - 리스트의 앞에서부터 혹은 뒤에서부터 모두 접근 가능
     - 각 노드는 앞 노드와 뒤 노드의 정보를 모두 저장
       ex) prev|data|next(Head) -> <- prev|data|next(일반노드) -><- prev|data|next(일반노드) -><-prev|data|next(Tail)

     - 양방향 연결리스트 삽입, 삭제 과정
        1) 삽입할 노드의 prev를 앞 노드의 next를 가르키게하고, 앞 노드의 next는 삽일할 노드의 prev를 가르키게 한다.
           삽입할 노드의 next는 뒤 노드의 prev와 위와 같은 방식으로 매치 시켜준다.

        2) 맨 앞 삭제시, Head의 next를 삭제할 노드의 뒤 노드 prev를 가르키게 하고,  뒤 노드 prev는 head의 next를 가르키게 한다.
           그 후 삭제할 노드의 메모리해제를 해준다.
   
  - 연결 리스트 구현에 있어서 주의할 점
     - 삽입 및 삭제 기능에서의 예외사항을 처리할  필요가 있습니다.
     - 삭제할 원소가 없는데 삭제하는 경우, 머리(Head) 노드 자체를 
       잘못 넣은 경우 등을 체크 

  - 내용정리
     - 삽입과 삭제가 많은 경우 배열보다 효율적
     - 특정한 인덱스에 바로 참조해야할 때가 많다면 배열이 효율적
 

## 스택
  - 한쪽으로 들어가서 한쪽으로 나오는 자료 구조
  - push : 스택에 데이터를 넣습니다.    / pop : 스택에서 데이터를 빼냅니다.
  - 배열이나 연결리스트로 만들어짐.


## 중위, 후위 표기법
  - 중위 표기법 : 일반적으로 사람이 수식을 표기할 때 사용
     ex) 7 * 5 + 3  
  - 후위 표기법 : 컴퓨터가 계산하기 편한 수식, 연산자는 뒤쪽에 위치
     ex) 75*3+

## 큐
  - 뒤쪽으로 들어가서 앞쪽으로 나오는 자료구조(Data Structure)
  - push : 데이터를 넣음, pop : 데이터를 뺌

## 선택정렬, 삽입정렬
  - 선택 정렬 : 가장 작은 것을 선택해서 앞으로 보내는 정렬 기법
        1) 가장 작은 것을 선택하는데 N번, 앞으로 보내는데 N번의 연산으로 
	   O(N^2)의 시간 복잡도를 가짐.
        2) 가장 작은 것과 맨앞값을 서로 바꿈

  - 삽입 정렬 : 각 숫자를 적절한 위치에 삽입하는 정렬 기법
        1) 들어갈 위치를 선택하는데 N번, 선택하는 횟수로 N번이므로 
	   O(N^2)의 시간 복잡도를 가짐.
        2) 작은 것을 선택해서 자신이 들어갈 위치까지 계속 연산을 수행
            ex) 2   3    4    1 이 있다고 할 때 삽입 정렬을 사용하면
               ->   2   3    1   4
               ->   2   1    3   4
               ->   1   2    3   4
               이렇게 총 3번의 연산을 하여 자신에 위치에 맞게 들어간다.


## 퀵 정렬
   - 피벗을 기준으로 큰 값과 작은 값을 서로 교체하는 정렬 기법
   - 값을 서로 교체하는데 N번 엇갈린 경우 교체 이후에 원소가 반으로 
     나누어지므로 전체 원소를 나누는 데에 평균적으로 logN번이 소요되므로 
     평균적으로 O(NlongN)의 시간 복잡도를 가짐.

   - ex) 맨 앞의 값이 5이고 피벗이라고 했을 때,
          1) 피벗을 제외한 앞에서부터 5보다 큰수를 찾음
          2) 뒤에서부터 5보다 작은 수를 찾음
          3) 큰수와 작은 수의 인덱스를 서로 바꿈
          4) 1~3을 실행하다가 큰값과 작은값이 중간을 기준으로 서로 엇갈렸다면
          5) 피벗값을 엇갈린 곳의 작은값과 바꿔준다.
          6) 그리고 피벗값을 기준으로 오른쪽과 왼쪽에 다시 퀵정렬을 실행한다.

   - 단점 : 편향된 분할이 발생할 때 연산의 양이 O(N^2)입니다.
            그래서 실제로는  c++의 sort()함수를 사용하고, 
	    이는 퀵정렬을 기반으로 하되 O(NlongN)을 보장


## 기수 정렬
  - 자릿수를 기준으로 차례대로 데이터를 정렬하는 알고리즘
  - 각 데이터를 자릿수 기준ㅇ로 분류하므로 가장 큰 자릿수를 D라고 했을 때 
    O(DN)의 시간 복잡도를 가짐.


## 이진트리
  - 나무의 형태를 뒤집은 것과 같은 형태의 자료구조
  - 최상단 노드 => '루트 노드'라 불림  /  마지막 노드들 => '리프 노드'라 불림
  - 이진 트리는 최대 2개의 자식을 가질 수 있는 트리
  - 완전 이진 트리 : 모든 노드들이 왼쪽 자식부터 차근차근 채워진 노드

  - 이진 트리의 순회 3가지 방법
     - 이진 트리의 전위 순회
        1) 자기 자신을 출력
        2) 왼쪽 자식 방문
        3) 오른쪽 자식 방문

     - 이진 트리의 중위 순회
        1) 왼쪽 자식을 방문
        2) 자기 자신을 출력
        3) 오른쪽 자식 방문

     - 이진 트리의 후위 순회
        1) 왼쪽 자식을 방문
        2) 오른쪽 자식 방문
        3) 자기 자신을 출력

## 우선순위 큐
  - 우선순위 큐의 필요성 : 데이터를 꺼낼 때 우선 순위가 높은 데이터가 
                           먼저 나온다는 특징
                           운영체제 작업 스케줄링, 정렬, 네트워크 관리 등에 사용
  
  - 큐 vs 우선순위 큐 차이점
    - 큐는 선형적인 형태를 가짐 vs 우선순위 큐는 트리 구조로 보는 것이 합리적
    - 우선순위 큐는 완전 이진 트리를 이용하여 구현됨.
    - 우선순위 큐는 모든 부모 노드가 자식노드보다 큰 '최대 힙' 상태여야 한다.

## 순차 탐색과 이진 탐색
  - 순차 탐색 : 특정한 원소를 찾기 위해 원소를 순차적으로 하나씩 탐색하는 방법,
               데이터 정렬 유무에 상관 없이 가장 앞에 있는 원수부터 하나씩 확인,
               O(N)의 시간 복잡도 

  - 이진 탐색 : 배열 내부 데이터가 이미 정렬 되어 있는 상황에서 사용가능한 
                알고리즘, 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 특징,
                O(logN)의 시간 복잡도

