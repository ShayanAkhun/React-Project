import React from "react";


const CommentDetail = ({author, date, text, avatar}) => {
   

 return (
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={avatar} style={{height:'50px', width: '50px'}}/>
    </a>
    <div className="content">
      <a href="/" className="author">{author}</a>
      <div className="metadata">
          <span className="date">{date}</span>
          <div className="text">{text}</div>
      </div>
    </div>
  </div>
  
      
     
 )
}
export default CommentDetail;