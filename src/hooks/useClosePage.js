import { useNavigate } from "react-router-dom"


function useClosePage() {

    const history = useNavigate()

    const redirectToPage = (arg, data) => {

        history(arg, { state: data })
    }


    const closePage = (arg) => {


        if (arg == "successfullSubscribe" || arg == "unsuccessfullSubscribe" || arg === "alreadyExistSubscribe" || arg === "successfullLogin" || arg === "successfullReg" || arg === "successfullCancel" ||  "unsuccessfullCancel") {

            redirectToPage("/")
        }

    }


    return { redirectToPage, closePage }

}

 

export default useClosePage