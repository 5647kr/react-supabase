import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import LogoutApi from "../api/LogoutApi";
import ReadPost from "../components/ReadPost";



export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // 로그인 예외처리
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      console.log(data)

      if (!data.session) {
        // 로그인 안 되어 있으면 로그인 페이지로 이동
        navigate("/login");
      } else {
        // 로그인 됨
        setIsLogin(true); // 로그인 되어 있음
      }
    };

    checkSession();
  }, [navigate]);

  // 로그아웃
  const logout = async () => {
    await LogoutApi();
    navigate("/login");
  }

  return (
    <div>
      <div>
        <button onClick={logout}>로그아웃</button>
        <Link to={"/admin/post"}>글 작성</Link>
      </div>
      <ReadPost />
    </div>
  )
}
