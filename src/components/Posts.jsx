import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [dataInPost,setdataInPost] = useState(postData);
  
  function addLikes (index) {
    const tempdeta =[...postData]
    tempdeta[index].likes +=1 
    setdataInPost(tempdeta)
  }
  function deleteLike (index){
    const tempdeta =[...postData]
    tempdeta[index].likes -=1 
    setdataInPost(tempdeta)
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
      {dataInPost.map((data,index)=> 
              <div class="post-item" key={data.title}> 
                <div class="post-header">
                  <h2>{data.title}</h2>
                  <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{data.likes}</span>
                </div>
              </div>
              <p class="post-content">
            {data.content}
          </p>
          <div class="post-actions">
            <button class="like-button"onClick={()=>addLikes(index)} >Like</button>
            <button class="dislike-button" onClick={data.likes > 0 ? () => deleteLike(index) :()=>alert(data.title+" can't Dislike") }>Dislike</button>
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default Posts;
