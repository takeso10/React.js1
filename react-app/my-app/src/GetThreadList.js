import React , {useEffect, useState} from 'react';

export const GetThreadList=()=>{
  const[threadList,setThreadList]=useState([]);  
  useEffect(()=>{
    fetch("http://railway-react-bulletin-board.herokuapp.com/threads")
      .then(response => response.json())
      .then((results)=>{
        setThreadList(results)
      });
  },[]);

  const displayThread = threadList.map((thread)=>{
    const link ="/thread/"+thread.id;
    return(
      <tr>
        <td><a href={link}>{thread.title}</a></td>
      </tr>
    )
  });
  
  return(
    <div class="thread" id ='NewThreadList'>
      <p>新着スレッド</p>
      <div class="ThreadList">
        <table border="1">
          {displayThread}
        </table>
      </div>
    </div>
  );
}



