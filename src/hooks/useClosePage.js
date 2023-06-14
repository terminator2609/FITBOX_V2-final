import { useNavigate } from "react-router-dom"


function useClosePage() {

    const history = useNavigate()

    const redirectToPage = (arg) => {

        history(arg)
    }


    const closePage = (arg) => {

        if(arg === "successfullReg") {

            redirectToPage("/")
        }
        
    }


    return { redirectToPage, closePage}

}



export default useClosePage