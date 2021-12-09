[자바스크립트 2. 콘솔에 출력, script async 와 defer의 차이점 및 앞으로 자바스크립트 공부 방향 | 프론트엔드 개발자 입문편 (JavaScript ES5+)](https://youtu.be/tJieVCgGzhs)

### Node.js 설치하기

[[Node.js] M1에서 nvm 설치하기](https://cotak.tistory.com/156?category=456808)

### JavaScript 공식 문서

[JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### async vs defer

1. &lt;head&gt; 안에 &lt;script&gt; 포함

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body></body>
</html>
```

브라우저가 한 줄 한 줄씩 읽어들이다가 <script src="main.js"></script>를 만나면 html을 파싱하는 것을 잠시 멈추고 필요한 js 파일을 서버에서 다운받고 html 파싱을 다시 시작한다.

*단점

만약 js파일의 사이즈가 아주 크고 인터넷도 느리다면 사용자가 웹사이트를 보는데까지 많은 시간이 소요된다. 

→ script를 그냥 head에 포함하는 것은 좋지않은 방법!

<img src="/Users/eun/TIL/javascript/img/head 안에 script 포함.png">

2. &lt;body&gt; 안 가장 끝부분에 &lt;script&gt; 포함

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
		<script src="main.js"></script>
</body>
</html>
```

브라우저가 쭈욱 파싱해서 페이지가 준비가 된 후에, script를 만나서 script를 서버에서 받아오고(fetching js) 실행하게(executing js) 된다. 페이지가 js를 받기 전에도 준비가 되어서 사용자가 기본적인 html 컨텐츠를 먼저 볼 수 있다는 장점이 있다.

*단점

웹사이트가 javascript에 굉장히 의존적이라면 (즉, 사용자가 의미있는 컨텐츠를 보기위해서는, js를 이용해서 서버에 있는 데이터를 받아온다거나 DOM 요소를 더 예쁘게 꾸며준다거나) 사용자가 정상적인 웹페이지를 보기위해서는 js를 fetching 하고 executing 하는 시간을 기다려야 한다.

<img src="/Users/eun/TIL/javascript/img/body 안에 script 포함.png">

3. &lt;head> 안에 async 옵션을 사용하여 &lt;script> 포함

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script async src="main.js"></script>
</head>
<body></body>
</html>
```

`async`는 불리언 타입의 속성값이기 때문에 선언하는 것만으로도 True로 설정되어서 사용할 수 있다. async를 만나면 HTML을 파싱하면서 동시에 병렬로 js를 다운받고, 다운이 완료가 되면 파싱을 멈추고 다운로드 된 js를 실행하게 된다. 실행을 다 하고나서 나머지 HTML을 파싱하게 된다.

fetching이 병렬적으로 일어나기 때문에 다운로드 받는 시간을 절약할 수 있다.

*단점

하지만 HTML이 파싱되기 전에 js가 실행이 되기 때문에 만약 js 파일에서 쿼리 셀렉터를 사용해서 DOM 요소를 조작한다면 조작하는 시점에 HTML에 우리가 원하는 요소가 아직 정의되지 않아있을 수 있다. 또, HTML을 파싱하는 동안에 js를 실행하기 위해서 멈출(blocked) 수 있기 때문에 여전히 사용자가 페이지를 보는 데 시간이 오래 걸린다.

<img src="/Users/eun/TIL/javascript/img/async.png">

*여러 js 파일을 async로 포함한 경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script async src="a.js"></script>
		<script async src="b.js"></script>
		<script async src="c.js"></script>
</head>
<body></body>
</html>
```

<img src="/Users/eun/TIL/javascript/img/async2.png">

여러 js 파일을 async로 포함하게 되면 정의된 순서에 상관없이 먼저 다운로드 받은 js 순으로 실행되게 된다. 따라서 순서에 의존적이라면 ascync 옵션을 사용하게 되면 문제가 생길 수 있다.

4. &lt;head> 안에 defer 옵션을 사용하여 &lt;script> 포함

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="main.js"></script>
</head>
<body></body>
</html>
```

파싱을 하다가 `defer` 를 만나면 js를 다운로드 받자하고 명령을 하고, 계속해서 파싱을 한다. 마지막에 파싱이 끝난 후에 다운로드 받은 js 파일을 실행하게 된다.

HTML을 파싱하는 동안 필요한 js 파일을 다운로드 받고, 파싱이 끝난 후에 바로 이어서 js 파일을 실행한다.

<img src="/Users/eun/TIL/javascript/img/defer.png">

*여러 js 파일을 defer로 포함한 경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="a.js"></script>
		<script defer src="b.js"></script>
		<script defer src="c.js"></script>
</head>
<body></body>
</html>
```

<img src="/Users/eun/TIL/javascript/img/defer2.png">

파싱하는 동안 필요한 js 파일을 모두 다운로드 받고, 정의한 순서대로 실행하게 된다.