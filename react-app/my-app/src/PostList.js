import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';

export const PostList=()=>{
  const {id}=useParams();
  const newID= id.slice(1);
  const [postList,setPostList]=useState([]);
  useEffect(()=>{
    fetch(`http://railway-react-bulletin-board.herokuapp.com/threads/${newID}/posts`)
    .then(response => response.json())
    .then((results)=>{
      setPostList(results.posts)
    });
  })
  const displayPost = postList.map((posts)=>{
    return(
      <ul>
        <li>{posts.post}</li>
      </ul>
    )
    });

  const sendPost=()=>{
    const postData =document.getElementById('postData');
    const postFormData ={
      title:postData.value,
    };
    fetch(`http://railway-react-bulletin-board.herokuapp.com/threads/${newID}/posts`,{
      method:"POST",
      headers:{
        'COntent-Type':'application/json'
      },
      body: JSON.stringify(postFormData)
    })
    .then(response=>response.json())
    .then((results)=>{console.log(results)})
    ;
  }
  
  return(
    <div class="Post">
        <div class="PostList">
          <h2>Techtrainってどうなの？</h2>
          {displayPost}
        </div>
        <div class="PostList-form">
          <textarea id='postData' placeholder='投稿しよう！'></textarea>
          <div class="postButton">
            <button onclick={sendPost}>投稿</button>
          </div>
        </div>
      
    </div>
  );
}