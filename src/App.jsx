import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomoPage/Homepage";
import SubscribePage from "./Components/Subscribe/SubscribePage"
import CancelPage from "./Components/CancelPage/CancelPage"
import LoginPage from "./Components/LoginPage/LoginPage"
import ForgotenPassPage from "./Components/ForgotenPassPage/ForgotenPassPage";
import NewPassPage from "./Components/newPassPage/newPassPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage"
import ProfilePage from "./Components/ProfilePage/ProfilePage"

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotenPass" element={<ForgotenPassPage />} />
        <Route path="/newPass" element={<NewPassPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </>
  )
}

export default App
