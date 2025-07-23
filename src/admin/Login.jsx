import { useState } from "react";
import LoginApi from "../api/LoginApi";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const adminLogin = await LoginApi({email, password})
      console.log("로그인 성공", adminLogin)
      navigate("/admin")
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">로그인</button>
      {errorMsg && <strong style={{ color: "red" }}>{errorMsg}</strong>}
    </form>
  );
}
