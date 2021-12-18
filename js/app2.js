window.onload = () => {
  // 버튼 가져오기
  const btnAllView = document.querySelector(".btnAllView");

  // 버튼 클릭 시 -> 할 일 처리
  btnAllView.addEventListener('click', () => {
    // 할 일 처리 -> 로컬 스토리지 데이터 값들을 가져와서 출력
    const getData = localStorage.getItem('background-color');
    console.log(getData);

    // Key만 출력하기
    console.log(localStorage.key(0)); // user-id
    console.log(localStorage.key(1)); // color
    console.log(localStorage.key(2)); // font-weight
    console.log(localStorage.key(3)); // user-name
    console.log(localStorage.key(4)); // background-color

    // Key의 개수 구하기
    console.log(localStorage.length);
  })
}
