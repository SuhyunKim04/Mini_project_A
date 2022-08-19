# Mini_project_A

## 원격저장소 방법
### git 으로 버전관리 시작하기
1.프로젝트 폴더 안에 들어간다
```javascript
$ git init
```
2. init 하고 원격 연결하기 아래 3번 명령어 실행
3. branch 정리 만약 master branch가 싫으면 새로운 branch 생성후에 master branch 삭제
4. add / commit 후 원격으로 push // 원격으로 push 할때 로컬에 있는 branch 이름을 적어주면 원격에도 똑같은 branch가 생성됨(아래 5번 실행)

### url 변경 방법
1. 현재 연결되어 있는 주소 확인 
```javascript
$ git remote -v
```
2. 연결되어 있는 로컬 레파지토리 이름을 확인 후 연결을 해제한다.
```javascript
$ git remote remove (레파지토리 이름)
```

3.새로연결 할 url 주소를 복사
```javascript
$ git remote add (로컬 레파지토리 이름) 링크(원격 레파지토리 url)
$ git remote add origin http://hdfsdf
```

4.연결 확인하기
```javascript
$ git remote -v
```

5.파일 커밋후 연결된 곳에 푸시한다.
```javascript
$ git add .
$ git commit -m "message"
$ git push (로컬 레파지토리 이름) (원격 레파지토리의 만들 브랜치 이름)
$ git push origin main
```
### 브랜치 삭제 및 생성
1.브랜치 생성
```javascript
$ git branch // 현재 브랜치 이름 확인
$ git branch milk(새로 생성할 브랜치 이름)
```
2. 새로운 브랜치로 바꾸기
```javascript
$ git checkout milk
```
3. 기존 브랜치 지우기
```javascript
$ git branch -d master(지울 브랜지 이름을 적어주기) // merge가 안된것이 있을때 오류남
$ git branch -D master(지울 브랜지 이름을 적어주기) // merge 안된거 있어도 강제로 삭제 가능
```
