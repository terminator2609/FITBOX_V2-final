import { useCookies } from "react-cookie"

function useCookieManager() {

    const [cookies, setCookies, removeCookie] = useCookies([])


    const addCookie = (name, value, options) => {

        setCookies(name, value, {
           maxAge: options
        })
    }

    return {addCookie, cookies}
}



export default useCookieManager