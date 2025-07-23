import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./admin/Login";
import Admin from "./admin/Admin";
import AddPost from "./admin/AddPost";
import UpdatePost from "./admin/UpdatePost";
import UserRead from "./pages/UserRead";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRead />} />
        

        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/admin/post" element={<AddPost />} />
        <Route path="/admin/update/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
