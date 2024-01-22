import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};
interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "/", element: <PrivateRoute element={<HomePage />} /> },
  { path: "/login", element: <Login /> },
]);
export default router;
