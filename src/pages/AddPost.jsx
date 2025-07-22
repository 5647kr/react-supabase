// src/pages/AddPost.jsx
import { useState } from 'react';
import supabase from '../supabaseClient';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content }]);

    if (error) {
      console.error('오류 발생:', error.message);
    } else {

      alert(data, '등록 완료!');
      setTitle('');
      setContent('');
    }
  };

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
