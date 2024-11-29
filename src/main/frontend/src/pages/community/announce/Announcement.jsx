import { useState } from "react";




const Announcement = ({gridArea}) => {

    // 게시물을 관리하는 상태
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);  // 새로운 게시물을 맨 앞에 추가
      };

    return (
        <div style={{gridArea : gridArea}}>
           {posts.length > 0 ? (
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {post.files && post.files.length > 0 && (
                  <p>첨부파일: {post.files.map(file => file.name).join(", ")}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>등록된 게시물이 없습니다.</p>
        )} 
 
        </div>
    )

}

export default Announcement;