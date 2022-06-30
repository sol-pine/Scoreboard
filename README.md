![rate11_대지 1](https://user-images.githubusercontent.com/105091138/176481752-6c544082-9cdb-4aa1-8c67-cd083baf69d9.png)
## 🟢 개요

매일 1점부터 5점까지 점수를 입력해 일주일 평균 점수를 확인할 수 있는 스코어보드

## 💪 목적

- 최소한의 컴포넌트 사용
- firebase를 사용해 서버에 데이터 저장

## ✨ 기능

https://user-images.githubusercontent.com/105091138/176497468-d3abc3ab-371e-4d5e-9eb0-a283b90adad3.mov
- 메인 페이지
    - 일주일 평균 점수 확인
    - 오늘 요일이 리스트 상단에 위치
    - `리셋버튼`을 누르면 점수 리셋
- 리뷰 페이지
    - 선택한 요일을 파라미터로 가져와 해당 요일을 화면에 보여주기
    - 점수를 입력하면 데이터베이스에 저장했다가 메인 페이지에 보여주기
    
## 🚀 트러블슈팅

### **에러**

score 의 state 변경이 비동기 처리로 한박자씩 늦게 변경

### 해결 코드

useEffect 의 dependency array 에 score를 넣어 score가 변경될 때 렌더링이 이루어지게 함

<img src="https://user-images.githubusercontent.com/105091138/176482009-d28aec2c-321e-4eae-b1e2-0faf608c71b2.png" width="500" height="504">
