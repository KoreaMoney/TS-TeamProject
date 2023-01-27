#TeamProject
# 1. 지출관리 웹 서비스
리더 : 스파르타 내배캠 이정익님/
팀원 : 스파르타 내배캠 김도원/
팀원 : 스파르타 내배캠 이재성님/
팀원 : 스파르타 내배캠 홍희진님/
팀원 : 스파르타 내배캠 김도훈님/
# 프로젝트 명 : 돈 부스러기 ( 헨델과 그레텔을 오마주 )
프로젝트 명 이유 :  직관적이면서, 통장에는 항상 돈이 부족한 이유를 설명하기 위함

# 주제 선정 : 소비지도를 pick
1. 주제 선정이유 : 항상 카드를 사용하거나, 내가 결제한 곳을 사용할 때마다, 이건 어디에서 사용한거지?
이건 도대체...왜 쓴거지? 하는 스스로를 돌아볼 수 있고, 스스로를 생각 할 수 있게 하는 부분에 초점을 맞춰서 브레인스토밍을 진행하였기 때문이다.

#  Map API :  카카오 지도API
사용 이유 : 네이버, 구글 Map API는 각각의 장점이 있지만, 직관적으로 참고할 DOCS자료의 양과 다양한 Custom할 수 있는 event들이 있어서 진행하였습니다.

# db설계방식
1. JSON Server진행
2. {
  "post": [
    {
      "id": "nanoid",
      "date": "date.now",
			"year": "string",
			"month": "string",
      "place": "string",
      "product": "string",
      "price": "number",
      "experience": "string",
			"userId": "auth.currentUser.uid"
    }
  ]
}

3. 로그인 회원가입은 Firebase로 진행 ( 간편하고, 보안상으로 편리함이 JSON보다 좋기 때문에 )

# git flow전략 이용
1. 적극적인 PR진행
2. 공통된 Commit code convention 지키기
- id, class → cabab-case
- Component, Type → PascalCase
- function, val → camelCase
- folder → lowercase
- 함수 → 동사로 시작되는 변수명 (handle~~~, is~~~~~, on)
- 변수, props → 명사로 지어주세요.
- 함수명 변수명 작성 시 명확하게 처음 보는사람이 봐도 알아볼 수 있는 의미로 짓기

 # 사용하는 라이브러리
 - styled-components
    - @types/styled-components
- react-router-dom
    - @types/react-router-dom
- react-query
- axios
- react-icons
- firebase
![image](https://user-images.githubusercontent.com/117058112/215064588-43a90edb-24a8-4942-851c-f621343ae064.png)


# Type 형식
id: string;
date: Date;
year: string;
month: string;
place: string;
product: string;
price: number;
experience: string;
