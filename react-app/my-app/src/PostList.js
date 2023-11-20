import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';

export const PostList=()=>{
  const {id}=useParams();
  const [postList,setPostList]=useState([]);
  const [text,setText]=useState([]);
  useEffect(()=>{
    fetch(`http://railway-react-bulletin-board.herokuapp.com/threads/${id}/posts?offset=40`)
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
    const postFormData ={
      post:text,
    };
    fetch(`http://railway-react-bulletin-board.herokuapp.com/threads/${id}/posts`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
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
          <textarea id='postData' placeholder='投稿しよう！' onChange={(e)=>setText(e.target.value)}></textarea>
          <div class="postButton">
            <button onClick={sendPost}>投稿</button>
          </div>
        </div>
      
    </div>
  );
}