import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, School, SignIn } from "../Pages";

const MyRoutes = () => {
  // const isAuthenticated = useSelector((state: RootState) => state.auth)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
