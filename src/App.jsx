import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomoPage/Homepage";
import CancelPage from "./Components/CancelPage/CancelPage"
import LoginPage from "./Components/LoginPage/LoginPage"
import ForgotenPassPage from "./Components/ForgotenPassPage/ForgotenPassPage";
import NewPassPage from "./Components/newPassPage/newPassPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage"
import ProfilePage from "./Components/ProfilePage/ProfilePage"
import PopUP from "./Components/PopUp/PopUp";
import SubscribePageStep1 from "./Components/Subscribe/SubscribePageStep1";
import SubscribePageStep2 from "./Components/Subscribe/SubscribePageStep2";


function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePageStep1 />} />
        <Route path="/subscribe/step2" element={<SubscribePageStep2 />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/login" element={<LoginPage  />} />
        <Route path="/forgotenPass" element={<ForgotenPassPage />} />
        <Route path="/newPass" element={<NewPassPage />} />
        <Route path="/registration" element={<RegistrationPage />} />s
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/serverError" element={<PopUP type="serverError"/>}/>
        {/* <Route path="*" element={<PopUP type="404" />} /> */}

      </Routes>
    </>
  )
}

export default App
