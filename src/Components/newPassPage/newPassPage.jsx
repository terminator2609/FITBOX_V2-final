import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import { useEffect, useState } from "react"
import useAuthManager from "../../hooks/useAuthManager"
import { useLocation } from "react-router-dom"
import useClosePage from "../../hooks/useClosePage"
import useError from "../../hooks/useError"
import uniqid from "uniqid"
import getFormData from "../../utilities/getFormData"
import { newPass, getUserDataById } from "../../services/registration"


function NewPassPage() {

    const { routerGuarding } = useAuthManager()
    const { redirectToPage } = useClosePage()

    const { inputIn, inputForIn, errorManager, typeError, statusText, submitStatusClasses, resetSubmitStatus, formatErrorHandler, passwordContains, passwordChangeHandler } = useError({ passwordIn: false }, "no", { passwordForIn: false })

    const [isSubmit, setIsSubmit] = useState(false)

    const location = useLocation()

    useEffect(() => {


        routerGuarding()


        if (!location.search.includes("email") || !location.hash.includes("id")) {

            redirectToPage("/forgotenPass")
        }

        else {

            let userId = location.hash.split("=")

            const link = location.search + location.hash

            userId = userId[1]

            getUserDataById(userId).then((res) => {

                if (res.ok) {

                    if (res.user.successfullRequestForChangePass.includes(link)) {

                        redirectToPage("/", "noValidNewPassLink")
                    }
                } else {
                    redirectToPage("/", "profileNoExist")
                }
            }).catch(() => {

                redirectToPage("/serverError")

            })

        }



    }, [])


    const newPassHandler = async (e) => {

        setIsSubmit(true)

        e.preventDefault()

        const data = getFormData(e.target)


        const { password } = data


        if (password.length === 0) {

            errorManager("empty", data)

        }

        data.link = location.search + location.hash

        data.id = location.hash


        if (!Object.values(typeError).includes(true) && !Object.values(inputForIn).includes(true)) {

            const request = await newPass(data).catch(() => {

                errorManager("server")

            })


            if (request) {

                redirectToPage("/", "successfullPassChange")

                e.target.reset()

            } else {

                e.target.reset()

                errorManager("server")
            }



        }

        setIsSubmit(false)

    }

    return (

        <>

            <ScrollToTop />

            <Navigation />



            <header className="newPassPage">
                <h1>Нова парола</h1>
                <p>Моля напиши своята нова парола</p>
            </header>

            <main className="newPassPage">
                <form action="#" method="POST" onSubmit={newPassHandler} onChange={resetSubmitStatus}>

                    <div>

                        {statusText.map((a) => <span key={uniqid()} className={submitStatusClasses()}>{a}</span>)}


                        <input type="password" name="password" id="password" placeholder="НОВА ПАРОЛА" onChange={passwordChangeHandler} onBlur={formatErrorHandler} className={inputIn.passwordIn || inputForIn.passwordForIn ? "error" : ""} />


                        {passwordContains[0].isPasswordInput ?

                            <ul>
                                <li className={passwordContains[1].isStartUpperCase ? "contains-char" : ""}>Започва с <b>главна </b>буква</li>
                                <li className={passwordContains[1].isContainNumber ? "contains-char" : ""}>Съдържа поне едно <b>число</b></li>
                                <li className={passwordContains[1].isContainUpperAndLowerCase ? "contains-char" : ""}>Съдържа поне една <b>малка и главна буква</b></li>
                                <li className={passwordContains[1].isContainSpecialChar ? "contains-char" : ""}>Съдържа поне един от специалните знаци: <b>!, @, #, $, %, ^, &, *</b></li>
                                <li className={passwordContains[1].isMin8Char ? "contains-char" : ""}>Съдържа минимум <b>8 знака</b></li>
                            </ul>

                            : ""
                        }

                    </div>

                    {!isSubmit ?

                        <div>
                            <input type="submit" value="Запази" />
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>

                        : ""
                    }


                </form>
            </main>



        </>
    )
}


export default NewPassPage