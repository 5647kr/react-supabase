import { useEffect, useState } from 'react'
import ReadApi from '../api/ReadApi'

export default function UserRead() {
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



  return (
    <div>
      {isLoading ? (
        <p>불러오는 중...</p>
      ) : (
        <ul>
          {post.map((item) => (
            <li key={item.id}>
              <h2>{item.title} - {item.id}</h2>
              <p>{item.content}</p>
              <time>{item.created_at}</time>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
