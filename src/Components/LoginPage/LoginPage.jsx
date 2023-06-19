import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import useError from "../../hooks/useError"
import getFormData from "../../utilities/getFormData"
import { newLogin } from "../../services/login"
import useSelectCheckbox from "../../hooks/useSelectCheckbox"
import useCookieManager from "../../hooks/useCookieManager"
import uniqid from "uniqid"
import useClosePage from "../../hooks/useClosePage"

function LoginPage({routing}) {

    const { inputIn, inputForIn, errorManager, typeError, statusText, submitStatusClasses, resetSubmitStatus, formatErrorHandler, isAuthSubmitStatus } = useError({ emailIn: false, passwordIn: false }, "no", { emailForIn: false })

    const { selectExactlyOne, isSelected, resetIsSelectState, } = useSelectCheckbox({ isRemember: false })

    const { addCookie, cookies } = useCookieManager()

    const { redirectToPage } = useClosePage()


    const postNewLogin = async (e) => {

        e.preventDefault()


        const data = getFormData(e.target)

        const { email, password, remember} = data


        if (email.length === 0 || password.length === 0) {

            errorManager("empty", data)

        }


        if (!Object.values(typeError).includes(true) && !Object.values(inputForIn).includes(true)) {

            const request = await newLogin(data).catch(() => errorManager("server"))


            if (request) {

                if (request.trueData) {
                    if (request.confirmedProfil) {

                        addCookie("auth", true, 60)

                       if(remember) {
                        addCookie("isLog", true, 604800)
                       } else {
                        addCookie("isLog", true, 3600)
                       }

                       routing()

                        errorManager("successfull", true)

                        e.target.reset()

                        resetIsSelectState()

                        redirectToPage("/")

                    } else {

                        errorManager("noConfirmProfil")
                    }
                } else {
                    errorManager('falseDataUser')
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

            <header className="loginPage">
                <h1>Вход</h1>
            </header>

            <main className="loginPage">

                <form action="#" method="POST" onSubmit={postNewLogin} onChange={resetSubmitStatus}>

                    <div>

                        {statusText.map((a) => <span key={uniqid()} className={submitStatusClasses()}>{a}</span>)}


                        <input type="text" name="email" id="email" placeholder="ИМЕЙЛ" onBlur={formatErrorHandler} className={inputIn.emailIn || inputForIn.emailForIn || isAuthSubmitStatus[1].noConfirmUserIn || isAuthSubmitStatus[1].falseDataUserIn ? "error" : ""} />
                        <input type="password" name="password" id="password" placeholder="ПАРОЛА" className={inputIn.passwordIn || isAuthSubmitStatus[1].noConfirmUserIn || isAuthSubmitStatus[1].falseDataUserIn ? "error" : ""} />

                    </div>

                    <div>

                        <span className="checkmark">
                            {isSelected.isRemember ?

                                <i className="fa-solid fa-check checkpoint"></i>

                                : ""
                            }

                        </span>
                        <input type="checkbox" name="remember" id="remember" onChange={selectExactlyOne} checked={isSelected.isRemember} />
                        <p>Запомни ме?</p>
                    </div>


                    <div>

                        <Link to="/forgotenPass">Забравена парола?</Link>
                        <Link to="/registration">Нямаш акаунт?</Link>

                    </div>


                    <div>
                        <input type="submit" value="Вход" />
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </form>

            </main>


        </>
    )
}


export default LoginPage