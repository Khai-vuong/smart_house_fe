import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate.jsx";
import HomePage from "../pages/HomePage/homepage.jsx";
import LoginRegister from "../pages/LoginRegister/loginRegister.jsx";
// import ControlPage from "../pages/ControlPage.jsx";
import ControlPage from "../pages/ControlPageNew.jsx";

const useRouterCustome = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginRegister />,
      children: [
        {
          index: true,
          // element: <CoursePage/>,
        },
      ],
    },
    {
      path: "/control",
      element: <ControlPage />,
    },
  ]);
  return router;
};

export default useRouterCustome;
