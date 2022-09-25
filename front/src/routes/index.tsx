import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, School, Admin } from "../Pages";

const MyRoutes = () => {
  // const isAuthenticated = useSelector((state: RootState) => state.auth)
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
  );
};

export default MyRoutes;
