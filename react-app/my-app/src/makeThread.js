import React from 'react';

export const MakeThread=()=>{
  function sendAPI() {
    const fetchData = document.getElementById('fetchData');
    const formData = {
      title:fetchData.value,
    };
    fetch("http://railway-react-bulletin-board.herokuapp.com/threads", {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then((results)=>{console.log(results)})
    ;

  }

 
  
  return(
    <div >
        <h2>スレッド新規作成</h2>
        <input type ="text" id='fetchData' placeholder="スレッドタイトル"></input>
        <div class="form-bottom">
          <button onclick={sendAPI}>作成</button>
        </div>
        
    </div>
  )
}