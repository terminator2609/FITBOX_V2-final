import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import { useEffect } from "react"
import useAuthManager from "../../hooks/useAuthManager"
import useError from "../../hooks/useError"
import { forgotenPass } from "../../services/registration"
import uniqid from "uniqid"
import getFormData from "../../utilities/getFormData"
import PopUP from "../PopUp/PopUp"


function ForgotenPassPage() {

    const { routerGuarding } = useAuthManager()
    const { inputIn, inputForIn, errorManager, typeError, statusText, submitStatusClasses, resetSubmitStatus, formatErrorHandler, isAuthSubmitStatus, isSubmitStatus} = useError({ emailIn: false }, "no", { emailForIn: false })

    useEffect(() => {


        routerGuarding()


    }, [])


    const postRequestForForgotenPass = async (e) => {

        e.preventDefault()

        const data = getFormData(e.target)


        const { email } = data


        if (email.length === 0) {

            errorManager("empty", data)

        }


        if (!Object.values(typeError).includes(true) && !Object.values(inputForIn).includes(true)) {

            const request = await forgotenPass(data).catch(() => {

                errorManager("server")

            })


            if (request) {

                if (request.auth) {
                    errorManager("successfull", true)

                    e.target.reset()
                } else {
                    
                    errorManager("noExistUser")
                }



            } else {


                errorManager("server")
            }



        }



    }


    return (

        <>
            <ScrollToTop />

            <Navigation />


            <header className="forgotenPassPage">
                <h1>Забравена парола</h1>
                <p>Моля напиши имейла си, на който ще получиш линк за потвърждение</p>
            </header>

            <main className="forgotenPassPage" >
                <form action="#" method="POST" onSubmit={postRequestForForgotenPass} onChange={resetSubmitStatus}>

                    <div>

                        {statusText.map((a) => <span key={uniqid()} className={submitStatusClasses()}>{a}</span>)}

                        <input type="text" name="email" id="email" placeholder="ИМЕЙЛ" onBlur={formatErrorHandler} className={inputIn.emailIn || inputForIn.emailForIn || isAuthSubmitStatus[1].noExistUserIn ? "error" : ""} />
                    </div>


                    <div>
                        <input type="submit" id="sendButton" value="Изпрати" />
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </form>
            </main>

            {isSubmitStatus[1].isSuccesfull ? <PopUP type="successfullRequestForChangePassword"/> : ""}

        </>
    )
}


export default ForgotenPassPage