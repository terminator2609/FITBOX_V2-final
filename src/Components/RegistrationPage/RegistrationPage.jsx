import Navigation from "../Navigation/Navigation"
import useError from "../../hooks/useError"
import getFormData from "../../utilities/getFormData"
import { postNewUserRequest, getUserDataByEmail } from "../../services/registration"
import uniqid from "uniqid"
import PopUP from "../PopUp/PopUp"
import ScrollToTop from "../ScrollToTop/ScrollToTop"



function RegistrationPage() {


    const { inputIn, inputForIn, errorManager, typeError, statusText, submitStatusClasses, resetSubmitStatus, formatErrorHandler, passwordContains, passwordChangeHandler, isAuthSubmitStatus, isSubmitStatus } = useError({ namesIn: false, emailIn: false, passwordIn: false, phoneNumberIn: false }, "no", { emailForIn: false, passwordForIn: false, phoneNumberForIn: false })


    const postNewUserHandler = async (e) => {

        e.preventDefault()

        const data = getFormData(e.target)


        const { name, email, password, phoneNumber } = data


        if (email.length === 0 || phoneNumber.length === 0 || password.length === 0 || name.length === 0) {

            errorManager("empty", data)

        }


        if (email !== "") {

            const alreadyUserCheck = await getUserDataByEmail(email).catch(() => {

                errorManager("server")

            })

            if (alreadyUserCheck) {

                if (alreadyUserCheck.request) {

                    errorManager("alreadyExistUser")
                }

            } else {

                errorManager("server")
            }

        }


        if (!Object.values(typeError).includes(true) && !Object.values(inputForIn).includes(true)) {

            const request = await postNewUserRequest(data).catch(() => {

                errorManager("server")

            })


            if (request) {

                errorManager("successfull", true)

                e.target.reset()

            } else {


                errorManager("server")
            }



        }




    }

    return (

        <>
            <ScrollToTop />
            
            <Navigation />



            <header className="registrationPage">
                <h1>Регистрация</h1>
            </header>

            <main className="registrationPage">


                <form action="#" method="POST" onSubmit={postNewUserHandler} onChange={resetSubmitStatus}>
                    <div>

                        {statusText.map((a) => <span key={uniqid()} className={submitStatusClasses()}>{a}</span>)}

                        <input type="text" name="name" id="name" placeholder="ИМЕ" className={inputIn.namesIn ? "error" : ""} />
                        <input type="text" name="email" id="email" placeholder="ИМЕЙЛ" onBlur={formatErrorHandler} className={inputIn.emailIn || inputForIn.emailForIn || isAuthSubmitStatus[1].emailExistIn ? "error" : ""} />
                        <input type="password" name="password" id="password" placeholder="ПАРОЛА" onChange={passwordChangeHandler} onBlur={formatErrorHandler} className={inputIn.passwordIn || inputForIn.passwordForIn ? "error" : ""} />
                        <input type="number" name="phoneNumber" id="phoneNumber" placeholder="ТЕЛЕФОН" onBlur={formatErrorHandler} className={inputIn.phoneNumberIn || inputForIn.phoneNumberForIn ? "error" : ""} />


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

                    <div>

                        <span className="checkmark">
                            <i className="fa-solid fa-check checkpoint"></i>
                        </span>
                        <input type="checkbox" name="generalPol" id="generalPol" />
                        <p>С регистрацията си се съгласявам с Политиката за защита на личните данни, тази за Бисквитките и
                            Общите условия</p>
                    </div>


                    <div>
                        <input type="submit" value="Регистрация" />
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </form>


            </main>


            {isSubmitStatus[1].isSuccesfull ? <PopUP type="successfullReg" /> : ""}


        </>
    )
}



export default RegistrationPage