import './App.css'
import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/start-page/StartPage.tsx";
import DashboardPage from "./pages/dashboard-page/DashboardPage.tsx";
import ProfilePage from "./pages/profile-page/ProfilePage.tsx";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<StartPage />} />
      <Route path={'/dashboard'} element={<DashboardPage />} />
      <Route path={'/profile'} element={<ProfilePage />} />
    </Routes>
  )
}

export default App
