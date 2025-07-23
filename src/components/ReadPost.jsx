import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReadApi from '../api/ReadApi'
import DeleteApi from '../api/DeleteApi'
import "./readPost.css"

export default function ReadPost() {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const postFetch = async () => {
      setIsLoading(true)
      try {
        const response = await ReadApi()
        setPost(response)
      } catch (err) {
        console.error('불러오기 오류:', err)
      } finally {
        setIsLoading(false)
      }
    }
    postFetch()
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return; // 사용자가 '취소'를 누름

    try {
      await DeleteApi(id); // Supabase 삭제 요청
      setPost((prev) => prev.filter((item) => item.id !== id)); // 상태 갱신
    } catch (err) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };


  return (
    <div>
      {isLoading ? (
        <p>불러오는 중...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>content</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>
                  <Link to={`/admin/update/${item.id}`} state={item}>수정</Link>
                </td>
                <td>
                  <button onClick={() => {handleDelete(item.id)}}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
