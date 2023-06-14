import { useCookies } from "react-cookie"
// import { jwt } from "jsonwebtoken"

function useCookieManager() {

    const [cookies, setCookies, removeCookie] = useCookies([])


    const addCookie = (name, value, options) => {


    }

    return {addCookie}
}



export default useCookieManager