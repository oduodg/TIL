# 데이터분석응용

<aside>
✏️ 홍익대학교 2022-1 산업공학과전공 데이터분석응용(김경도 교수님) 수업을 정리한 내용입니다.
</aside>

---

> 목차
> 
- [R 기초 사용법](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis01.md#r-%EA%B8%B0%EC%B4%88-%EC%82%AC%EC%9A%A9%EB%B2%95)
  - [R Studio](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis01.md#r-studio)
  - [R 기초](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis01.md#r-%EA%B8%B0%EC%B4%88)
    
- [데이터 처리](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis02.md#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC)
  - [벡터 데이터](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis02.md#%EB%B2%A1%ED%84%B0-%EB%8D%B0%EC%9D%B4%ED%84%B0)
  - [행렬 데이터](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis02.md#%ED%96%89%EB%A0%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0)
  - [데이터프레임 데이터](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis02.md#%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%94%84%EB%A0%88%EC%9E%84-%EB%8D%B0%EC%9D%B4%ED%84%B0)
  - [배열 데이터](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis02.md#%EB%B0%B0%EC%97%B4-%EB%8D%B0%EC%9D%B4%ED%84%B0)
  - [리스트 데이터](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis02.md#%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0)

- [데이터 조작](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis03.md#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A1%B0%EC%9E%91)
  - [rbind, cbind 함수와 행렬 데이터의 사용](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis03.md#rbind-cbind-%ED%95%A8%EC%88%98%EC%99%80-%ED%96%89%EB%A0%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%9D%98-%EC%82%AC%EC%9A%A9)
  - [apply 계열 함수](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis03.md#apply-%EA%B3%84%EC%97%B4-%ED%95%A8%EC%88%98)
  - [summary, order, sample 함수](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis03.md#summary-order-sample-%ED%95%A8%EC%88%98)
  - [split, subset, with, merge 함수](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis03.md#split-subset-with-merge-%ED%95%A8%EC%88%98)
  - [which, aggregate 함수](https://github.com/oduodg/TIL/blob/main/R/Application-of-Data-Analysis03.md#which-aggregate-%ED%95%A8%EC%88%98)