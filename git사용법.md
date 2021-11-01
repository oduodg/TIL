1. github에서 레퍼지토리 생성하기
2. 로컬 저장소와 깃 연동하기
    1. 맥의 터미널 열기
    2. git 연동 초기 설정 
        1. $ git config —global [user.name](http://user.name) "odudog"
        2. $ git config —global [user.email](http://user.email) "werewildfire@gmail.com"
        3. $ git config —list //제대로 설정되었는지 확인
    3. 원격 저장소와 연동하고 싶은 로컬 저장소 위치로 이동
        1. 맥에서 디렉토리/파일 위치 복사(option+cmd+.)
        2. $ cd /Users/eun/Desktop/test/
    4. git 초기화 
        1. $ git init
        2. 맥 숨김 파일 표시(cmd + shift + .) -> `.git` 디렉토리가 생긴 것을 확인
    5. 모든 하위 디렉토리/파일을 Staging 추가하기
        1. $ git add .
    6. 커밋하기
        1. $ git commit -m "commit message"
    7. 레퍼지토리(원격 저장소) 연결
        1. $ git remote add origin 원격저장소URL
        2. $ git remote -v //원격저장소에 잘 연결되었는지 확인
    8.  깃 브랜치 이름 변경
        1. $ git branch -m old_branch new_branch
        2. master를 main으로 바꾸려면 $ git branch -m master main 
    9.  Github에 최초 푸시(업로드)
        1. $ git push -u origin main
3. 이후 작업
    1. staging 추가
        1. $ git add .
    2. commit
        1. $ git commit -m "커밋 메세지"
    3. push(업로드)
        1. $ git push
    4. pull(다운로드)
        1. $ git pull
4. git 추적 제외 디렉토리/파일 설정
    1. 사용 목적 
        
        내가 작업하는 공간(로컬 등)에서는 필요한 내용이지만 협업하는 공간 혹은 원격(remote)에는 push하지 말아야하는 파일이나 설정정보가 있을 때가 있음. 이때, 무시하지 않고 push 하는 경우 충돌이 일어날 수 있음. (예를 들면 db_connection 정보라거나 config 설정정보라거나)
        
    2. `.gitignore` 파일 생성하기(이 때, `.git` 디렉토리가 있는 디렉토리에 생성할 것)
    3. 내용 작성법
        
        예시(test.txt 파일과 test 폴더를 ignore 해보자)
        
        파일 무시 → test.txt
        
        폴더 무시 → test/
        
        확장자 전체 무시 → *.text , *.exe , *.zip
        
        주석 사용 방법: # (`.gitignore` 파일에서 # 뒤에 쓰는 내용은 주석처리 된다.)
        
    4. 주의사항
        
        기존에 git의 관리를 받고 있던 파일이나 폴더 경로를 `.gitignore` 파일에 추가로 작성하고 push 해도 무시되지 않는다.
        
        이 때, 기존에 갖고 있던 캐시를 삭제해야 한다.
        
    5. 캐시 삭제 명령어 사용법
        1. 파일인 경우, $ git rm —cached test.txt
        2. 전체 파일인 경우, $ git rm —cached *.txt
        3. 폴더인 경우, $ git rm —cached test/ -r