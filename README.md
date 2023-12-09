# localStorage 이용하기

## 저장하기
```javascript
// localStorage.setItem(key, value);

localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```
key와 value를 파라미터에 각각 작성해준다.
value에 `object/array` 자료형을 넣고싶으면
```javascript
const obj = {
  name : '홍길동'
}

const json = JSON.stringify(obj);
localStorage.setItem("object", json);
```
`JSON.stringify`를 이용해서 string 형식으로 바꿔준 다음에 저장할 수 있다.

## 가져오기
```javascript
// localStorage.getItem(key);

localStorage.getItem("myCat");
```
해당 키의 값을 가져온다.

## 삭제하기 (일부, 전체)
```javascript
// localStorage.removeItem(key);

localStorage.removeItem("myCat");
```
삭제하고 싶은 key값을 파라미터에 작성하면 해당 키 데이터가 삭제된다.

```javascript
localStorage.clear();
```
로컬 스토리지에 있는 모든 데이터들을 삭제한다.

## 개수알기
```javascript
localStorage.length
```
로컬스토리지에 저장된 데이터의 개수를 알수 있다.

## key 이름 찾기
```javascript
// localStorage.key(index);

localStorage.key(1);
```
해당 index의 key값을 가져온다.
