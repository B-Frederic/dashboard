// React
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
// Components
import Header from "./components/Layout/Header/Header";
import Calendar from "./pages/Calendar/Calendar";
import Kanban from "./pages/Kanban/Kanban";
import UserList from "./pages/UserList/UserList";
import Error from "./pages/Error/Error";

const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/calendrier",
        element: <Calendar />,
      },
      {
        path: "/taches",
        element: <Kanban />,
      },
      {
        path: "/utilisateurs",
        element: <UserList />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

const App = () => {
  return (
    <div id="dashboard">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
