window.onload = () => {
  // 버튼 가져오기
  const btnAllView = document.querySelector('.btnAllView');
  console.log(btnAllView);
  
  // 버튼 클릭 시 -> 할 일 처리
  btnAllView.addEventListener('click', () => {
    /* 할 일 처리 -> 로컬 스토리지 데이터 값들을 가져와서 출력 */
    // const getData = localStorage.getItem('background-color');
    // console.log(getData);

    /* Key만 출력하기 */
    // console.log(localStorage.key(0)); // user-id
    // console.log(localStorage.key(1)); // color
    // console.log(localStorage.key(2)); // font-weight
    // console.log(localStorage.key(3)); // user-name
    // console.log(localStorage.key(4)); // background-color

    /* Key의 개수 구하기 */
    // console.log(localStorage.length);

    /* 배열 정보를 동적으로 테이블 생성하여 삽입하기 -> tbody */
    let ar = new Array();
    let result = '';

    ar.push({ name: '홍길동', email: 'hong@hong.com', age: '25', pastime: '음악감상' });
    ar.push({ name: '가길동', email: 'gagil@hong.com', age: '21', pastime: '영화감상' });
    ar.push({ name: '나길동', email: 'nagilg@hong.com', age: '14', pastime: '미술감상' });
    ar.push({ name: '다길동', email: 'dagilg@hong.com', age: '45', pastime: '운동하기' });
    ar.push({ name: '마길동', email: 'magilg@hong.com', age: '38', pastime: '티비보기' });

    // console.log(ar[0]);
    // console.log(ar[0]['name']);
    // console.log(ar[0].name);
    // console.log(ar[0].email);
    // console.log(ar[3].name);

    /* 반복문을 순회하면서 배열의 정보를 result 변수에 누적 */
    for (const i in ar) {
      // console.log(i);
      result += `<tr>`;
      result += `<td>${ar[i].name}</td>`;
      result += `<td>${ar[i].email}</td>`;
      result += `<td>${ar[i].age}</td>`;
      result += `<td>${ar[i].pastime}</td>`;
      result += `</tr>`;
    }
    // const hTbody = document.getElementById('htmlTbody');
    // console.log(hTbody);

    // Append - jquery
    // $('#htmlTbody').empty();
    // $('#htmlTbody').append(result);

    // insertHTML
    // const hTbody = document.querySelector('#htmlTbody');
    // console.dir(hTbody.children.length !== 0);
    // if (hTbody.children.length !== 0) {
    //   for (j = 0; j < hTbody.children.length; j++) {
    //     hTbody.removeChild(hTbody.childNodes[j]);
    //   }
    // }
    // hTbody.insertAdjacentHTML('beforeend', result);
  });
  const btn = document.querySelector(".buttons");
  const hTbody = document.querySelector('#htmlTbody');
  // function ture() {
  //   if (hTbody.children.length !== 0) {
  //     for (j = 0; j < hTbody.children.length; j++) {
  //       hTbody.removeChild(hTbody.childNodes[j]);
  //     }
  //   }
  // }
  btn.addEventListener('click', function() {
    if (hTbody.children.length !== 0) {
      for (j = 0; j < hTbody.children.length; j++) {
        hTbody.removeChild(hTbody.childNodes[j]);
      }
    }
  });
};
