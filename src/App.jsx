// React
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
// Components
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar/Calendar";
import Kanban from "./pages/Kanban/Kanban";
import UserList from "./pages/UserList/UserList";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/> }>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="calendrier" element={<Calendar/>} />
            <Route path="taches" element={<Kanban/>} />
            <Route path="utilisateur" element={<UserList/>} />
          </Route>
          <Route path="/*" element={<Error/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
};

export default App;