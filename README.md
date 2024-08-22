# Duksun Design Guide
    1. KEYWORD
    #레트로 #픽셀 #고전
    
    2. COLOR
    #DF1900, #022CFF, #FCEFE8
    - 강렬한 빨강과 시원한 파랑의 대조가 부드러운 베이지 톤과 균형을 이루어,
    에너제틱하면서도 세련된 느낌을 주도록 함.
    
    3. FONT
    - 기본 폰트 : G마켓 산스
    - 포인트 폰트 : Neo둥근고딕Pro


# Duksun 작업 일지

## 240821
* GIT HUB - VS CODE 연동
* mobile sub - js - 수량 버튼 작동 시 금액 계산 이벤트 구현
* mobile sub - css - 상품 썸네일 디자인 구현


# Duksun 이슈 해결

* mobile sub - js - 상품 키워드 클릭 시 배경, 텍스트 색상 변경 이벤트 이슈
    - 이슈 내용 : '.pk' 클릭 시 '.active'에 설정한 배경, 텍스트 색상으로 변경되는 스크립트를 넣었지만 작동되지 않음.  
    - 이슈 원인 : '.pk'가 들어간 요소에 클릭 이벤트가 발생하면 '.active' 클래스를 추가하는 스크립트를 넣었기 때문에 클릭을 하면 class="pk active" 상태가 되는데, css에서 '.active' 속성에 변경될 색상을 설정했기 때문이었음.  
    - 해결 방법 : css에서 변경될 색상을 '.pk.active'에 설정함.

* 웅냥냥