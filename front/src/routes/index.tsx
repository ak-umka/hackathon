import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, School } from "../Pages";

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
