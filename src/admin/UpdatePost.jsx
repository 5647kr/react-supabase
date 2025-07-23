import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import UpdateApi from '../api/UpdateApi';




export default function UpdatePost() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);
  

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setContent(post.content)
      setId(post.id)
    }
  }, [post])

  const handleUpdate = (e) => {
    e.preventDefault();
    UpdateApi({title, content, id});
    navigate("/admin")
  }


  return (
    <form onSubmit={handleUpdate}>
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
      <button type="submit">수정</button>
    </form>
  )
}
