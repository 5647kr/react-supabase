// src/pages/AddPost.jsx
import { useState } from 'react';
import PostApi from '../api/PostApi';
import { useNavigate } from 'react-router-dom';



export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostApi({title, content});
    navigate("/admin")
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}
