// 브라우저 로컬 데이터에 저장하기

// [!] 주요 메서드 2개
// 값 저장하기 --> localStorage.setItem('key', value);
// 값 가져오기 --> localStorage.getItem('key');
// key를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되면서 기존 로컬 데이터 정보가 수정.

window.onload = () => {
  /* 버튼 */
  const btnSLD = document.querySelector(".btnSetLocalData");
  const btnGLD = document.querySelector(".btnGetLocalData");
  /* input 텍스트 */
  const setInput = document.querySelector("#setInput");
  const getInput = document.querySelector("#getInput");

  const setData = () => {
    /* 할 일 처리 --> 입력한 텍스트 값 가져오기 */
    let setInputValue = setInput.value;

    /* localStorage 저장 */
    localStorage.setItem('inputValue', setInputValue);
    setInput.value = "";
  }

  /* set Data 버튼 클릭 시 */
  btnSLD.addEventListener('click', setData);
  /* 엔터 치면 값을 localStorage에 저장 */
  setInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      console.log('hi');
      setData();
    }
  })

  /* get Data 버튼 클릭 시 */
  btnGLD.addEventListener('click', () => {
    /* 할 일 처리 --> 해당 키의 로컬 데이터가 있으면 가져오기 */
    const getData = localStorage.getItem('inputValue');
    
    if(!getData)
      alert('해당 키 로컬에 저장된 데이터가 없네요~')
    else 
    getInput.value = getData;
  })
}