import { useEffect, useState } from "react";
import useClosePage from "../hooks/useClosePage";
import useCookieManager from "../hooks/useCookieManager";
import { useLocation } from "react-router-dom";

function useAuthManager() {

    const [auth, setAuth] = useState(false)

    const location = useLocation()

    const { redirectToPage } = useClosePage()

    const { cookies } = useCookieManager()




    const settingOnAuthStatus = (authStatus) => {

        if (authStatus) {
            setAuth(true)
        }


    }


    const authChecking = () => {

        if (cookies.isLog) {

            setAuth(true)
        }
    }


    const routerGuarding = () => {

        if (!auth && (location.pathname === "/subscribe" || location.pathname === "/cancel" || location.pathname === "/profile")) {

            redirectToPage("/login")

        } else if (auth && (location.pathname === "/login" || location.pathname === "/registration" || location.pathname === "/forgotenPass" || location.pathname === "/newPass")) {

            redirectToPage("/")

        }
    }







    return { settingOnAuthStatus, authChecking, routerGuarding }

}


export default useAuthManager