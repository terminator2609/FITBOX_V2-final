import { useNavigate } from "react-router-dom"


function useClosePage() {

    const history = useNavigate()

    const redirectToPage = (arg, data) => {

        history(arg, { state: data })
    }


    const closePage = (arg) => {

        if (arg === "successfullReg") {

            redirectToPage("/")

        } else if (arg === "successfullLogin") {

            redirectToPage("/")

        } else if (arg == "successfullSubscribe" || arg == "unsuccessfullSubscribe") {
            
            redirectToPage("/")
        }

    }


    return { redirectToPage, closePage }

}



export default useClosePage