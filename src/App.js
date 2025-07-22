import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost";
import ReadPost from "./pages/ReadPost";
import UpdatePost from "./pages/UpdatePost";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadPost />} />
        <Route path="/post" element={<AddPost/>} />
        <Route path="/update/:id" element={<UpdatePost/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
