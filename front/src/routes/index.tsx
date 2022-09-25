
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, School, Admin } from "../Pages";

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRoutes
