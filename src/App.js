import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost";
import ReadPost from "./pages/ReadPost";
import UpdatePost from "./pages/UpdatePost";
import Login from "./admin/Login";
import Admin from "./admin/Admin";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadPost />} />
        <Route path="/post" element={<AddPost/>} />
        <Route path="/update/:id" element={<UpdatePost/>} />

        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
