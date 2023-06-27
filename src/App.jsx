import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomoPage/Homepage";
import SubscribePage from "./Components/Subscribe/SubscribePage"
import CancelPage from "./Components/CancelPage/CancelPage"
import LoginPage from "./Components/LoginPage/LoginPage"
import ForgotenPassPage from "./Components/ForgotenPassPage/ForgotenPassPage";
import NewPassPage from "./Components/newPassPage/newPassPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage"
import ProfilePage from "./Components/ProfilePage/ProfilePage"
import { useEffect } from "react";
import useAuthManager from "./hooks/useAuthManager";
import PopUP from "./Components/PopUp/PopUp";


function App() {

  const { authChecking, routerGuarding, settingOnAuthStatus, auth } = useAuthManager()

  useEffect(() => {

    authChecking()

    routerGuarding()
  }, [auth])


  const routing = () => {

    settingOnAuthStatus(true)

  }



  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage auth={auth} />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/login" element={<LoginPage routing={routing} />} />
        <Route path="/forgotenPass" element={<ForgotenPassPage />} />
        <Route path="/newPass" element={<NewPassPage />} />
        <Route path="/registration" element={<RegistrationPage />} />s
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<PopUP type="404"/>}/>

      </Routes>
    </>
  )
}

export default App
