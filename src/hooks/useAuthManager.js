import useClosePage from "../hooks/useClosePage";
import useCookieManager from "../hooks/useCookieManager";
import { useLocation } from "react-router-dom";

function useAuthManager() {


    const location = useLocation()

    const { redirectToPage } = useClosePage()

    const { cookies } = useCookieManager()




    const routerGuarding = () => {

        if (cookies.isLog === undefined && (location.pathname === "/subscribe" || location.pathname === "/cancel" || location.pathname === "/profile" || location.pathname === "/subscribe/step2")) {

            redirectToPage("/login")

        } else if (cookies.isLog && location.pathname === "/login" || cookies.isLog && location.pathname === "/registration" || cookies.isLog && location.pathname === "/forgotenPass" || cookies.isLog && location.pathname === "/newPass") {

            redirectToPage("/")

        }
    }







    return { routerGuarding }

}


export default useAuthManager