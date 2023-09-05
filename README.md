# React로 만드는 간단한 텍스트 어드벤쳐 게임 
React를 활용해서 텍스트 어드벤처에 자주 등장하는 기능들을 구현해 가는 프로젝트입니다.
TypeScript를 활용하는 연습 목적의 프로젝트임으로 any 타입을 사용하지 않고 최대한 타입을 특정해서 정의하도록 노력합니다.

## 기능 
목표로 하는 기능의 목록과 그 정의입니다.

### 타이틀 화면 

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbj4a8C%2FbtstfQ80NtM%2FYk8jwsxrCeTEb65GzQjRdK%2Fimg.png)

타이틀의 구성은 제목과 메뉴가 표시되며 배경으로는 게임의 핵심적인 내용 혹은 세일즈 포인트가 담긴 이미지가 표시되어야함
- 처음부터 : 게임을 처음부터 시작하는 기능. 필요에 따라 즉시 게임을 시작하거나 인트로를 재생할 수 있음
- 이어하기 : 게임을 중단한 시점부터 시작하는 기능. 즉 저장한 시점의 데이터를 불러와 진행할 수 있도록 구현
- 특전 : 게임을 1회 이상 클리어 했다면 개방될 기능. 클리어 특전을 제공하는 페이지로 연결되도록 함
- 설정 : 게임 내 설정을 수정하는 페이지로 이동. 소리의 크기 폰트의 사이즈 등을 변경할 수 있도록 함

### 게임 플레이 
![](https://cdn.cloudflare.steamstatic.com/steam/apps/2055730/ss_70d77054002c4b19b64a083e7e79603adaba5d17.1920x1080.jpg?t=1688449978)
예시 이미지

배경 이미지, 캐릭터 스탠딩 이미지와 텍스트로 게임을 진행함. 
게임 진행 중 선택지가 발생하며 선택지에 따라 이야기가 분기되도록 진행 

- 다음 문장 재생 : 화면을 클릭하면 다음 문장 재생하는 기본적인 텍스트를 넘기는 기능 
- AUTO : 텍스트를 일정 간격에 따라 자동으로 넘겨주는 기능 
- 스킵 : 이야기를 빠르게 넘길 수 있는 기능 
- 인터페이스 숨기기 : 인터페이스를 숨기고 이미지를 볼 수 있는 기능 
- 옵션 : 설정, 저장, 불러오기 기능을 호출할 수 있는 버튼 
- 백로그 : 백 로그를 확인하고 해당 문장으로 돌아갈 수 있는 기능 
- 선택지 출력 및 분기 : 이야기를 진행하기 위한 선택지 출력 및 분기 처리하는 기능 


### 제한 사항 
- 스크립트 : 시나리오 라이터의 부재로 작성이 불가, AI를 이용한 자동 생성 텍스트 사용. 
- 배경 및 캐릭터 디자인 : 일러스트레이터의 부재로 생성이 불가, AI 혹은 오픈 소스를 활용해서 대체.