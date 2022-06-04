# 프로젝트 소개
- 개발 블로그 만들기 프로젝트

## 프로젝트의 목적
   - 블로깅
      - `개발 관련 기록`을 한 곳에 모으기 위한 목적 
   - 프로젝트 아카이빙
      - 그 동안 해온 `프로젝트`를 한 곳에 모아두기 위한 목적
   - 학습한 것을 적용하는 playground
      - 관심있는 기술과 주제를 연구/적용해보기 위한 목적

## 페이지
   - HOME 페이지: 사이트의 표지, 메인 페이지 역할
      - 게시물 추천 
   - BLOG 페이지: 개발 블로그
      - 카테고리 별로 분류된 게시글 목록 
   - PROJECTS 페이지: 프로젝트 아카이빙
   - CONTACT 페이지
      - 연락처, 메일 등의 정보를 볼 수 있음
      - 메세지를 남길 수 있음
      
## 연구/적용해본 내용
### 간단한 버전의 UI 컴포넌트 기획/개발

* 초기 기획
![ui-comp](https://user-images.githubusercontent.com/54441505/171970626-c7ade46d-4495-4618-b5a2-b8217ead6328.png)

* 사이트에 적용된 모습

🔗 [보러가기](https://www.juepark.com/about)

<details>
<summary>여기서 보기</summary>
<div markdown="1">
    <br>
    <div align=center>
    <img src="https://user-images.githubusercontent.com/54441505/171970798-107fa2ff-ee49-4052-b08e-9f861af7d459.png" width="1400" />
    <img src="https://user-images.githubusercontent.com/54441505/171970823-cb363e73-ce7e-4f3e-89a0-96d6ce094840.png" width="1400" />
    <img src="https://user-images.githubusercontent.com/54441505/171970835-3697286b-13ab-4e56-a915-5a5f449835e2.png" width="1400" />
    </div>  
    <br>
   </a>
</div>
</details>

# 실행 화면
## BLOG 페이지
* 게시글 리스트
<img width="1200" alt="Screen Shot 2022-05-28 at 2 38 26 PM" src="https://user-images.githubusercontent.com/54441505/170812788-35b7b998-0a8c-477a-aabb-d7f633575a38.png">
* 게시글 디테일
<img width="1200" alt="Screen Shot 2022-05-28 at 2 38 35 PM" src="https://user-images.githubusercontent.com/54441505/170812793-00792b26-3f4d-494f-8133-189e0bd45053.png">


# 실행 방법

# 시스템 구성도(작성중)
## 사용한 기술과 사용한 이유
   - 프레임워크/`Next.js`
      - 멀티페이지 어플리케이션
         - SSR을 채택하는 멀티 페이지 어플리케이션의 경우 각 페이지가 있기 때문에 SEO에 유리함
         - 상위노출  
      - 소개: `SPA`와 `SSR`의 단점을 해결하기 위한 솔루션 
         - `SPA` 단점: `SEO`(검색 엔진 최적화)가 가능하지만 추가설정이 필요하여 SSR에 비해 복잡함(`hard—not impossible`)
            - 웹서버, 웹팩과 같은 번들러 설정 등 번거로운 추가 작업 필요  
         - `SSR` 단점:  페이지 이동시 새로운 페이지를 요청하기 때문에 깜빡임일 발생하고 중복로딩으로 인한 서버부담이 생길 수 있음
      - 이러한 `SPA`와 `SSR`의 단점을 해결하기 위해서 리액트에 서버사이트 렌더링 기능을 더한것이 `Next.js`임
      - 추가적으로 작업하지 않아도 `SSR`을 사용할 수 있음
   - 백엔드 서비스/Firebase(추후 업데이트 예정)
   - 배포/Vercel(추후 업데이트 예정)
   - 기타/GA(추후 업데이트 예정)


# 저작권 및 라이선스(추후 업데이트 예정)
# 버그 및 기능 요청(추후 업데이트 예정)
# 기여자 정보
- [humonnom](https://github.com/humonnom)
