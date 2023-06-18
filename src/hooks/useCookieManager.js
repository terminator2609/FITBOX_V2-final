import { useCookies } from "react-cookie"

function useCookieManager() {

    const [cookies, setCookies, removeCookie] = useCookies([])

    
    const addCookie = (name, value, options) => {

        setCookies(name, value, {
           maxAge: options
        })
    }

    const removeCookies = (name) => {

        removeCookie(name)
    }

    return {addCookie, cookies, removeCookies}
}



export default useCookieManager