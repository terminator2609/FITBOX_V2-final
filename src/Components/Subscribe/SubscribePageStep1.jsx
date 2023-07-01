import { useEffect } from "react"
import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import useAuthManager from "../../hooks/useAuthManager"
import useClosePage from "../../hooks/useClosePage"
import getFormData from "../../utilities/getFormData"
import useError from "../../hooks/useError"
import uniqid from "uniqid"
import useCookieManager from "../../hooks/useCookieManager"
import { checkForSubscribe } from "../../services/subscribe"

function SubscribePageStep1() {

    const { routerGuarding } = useAuthManager()
    const { redirectToPage } = useClosePage()

    const { addCookie, cookies, removeCookies } = useCookieManager()


    const { inputIn, inputForIn, errorManager, typeError, statusText, submitStatusClasses, resetSubmitStatus, formatErrorHandler } = useError({ namesIn: false, phoneNumberIn: false, cityIn: false, officeOfSpeedyIn: false }, "no", { phoneNumberForIn: false })

    useEffect(() => {

        routerGuarding()


        if (cookies.isLog) {
            checkForSubscribe(cookies.isLog.id).then((res) => {

                if (res.ok) {
                    if (res.subscribed) {

                        redirectToPage("/", "alreadyExistSubscribe")
                    }
                } else {
                    removeCookies("isLog")
                    redirectToPage("/")
                }


            }).catch(() => {
                removeCookies("isLog")
                redirectToPage("/serverError")
            })

        }







    }, [])

    const getSubscriberData = (e) => {

        e.preventDefault()

        const data = getFormData(e.target)

        const { name, phoneNumber, city, officeOfSpeedy } = data


        if (name.length === 0 || phoneNumber === 0 || city.length === 0 || officeOfSpeedy.length === 0) {
            errorManager("empty", data)
        }


        if (!Object.values(typeError).includes(true) && !Object.values(inputForIn).includes(true)) {

            addCookie("person", data, 3600)

            redirectToPage("/subscribe/step2", data)
        }




    }

    return (

        <>
            <ScrollToTop />

            <Navigation />

            <header className="subscribePage">
                <h1>На кого изпращаме?</h1>
            </header>

            <main className="subscribePage">

                <section className="personData">
                    <form action="#" method="POST" onSubmit={getSubscriberData} onChange={resetSubmitStatus}>

                        <div>

                            {statusText.map((a) => <span key={uniqid()} className={submitStatusClasses()}>{a}</span>)}


                            <input type="text" name="name" id="name" placeholder="ИМЕ" className={inputIn.namesIn ? "error" : ""} defaultValue={cookies.person ? cookies.person.name : ""} />
                            <input type="number" onBlur={formatErrorHandler} name="phoneNumber" id="phoneNumber" placeholder="ТЕЛЕФОН" className={inputIn.phoneNumberIn || inputForIn.phoneNumberForIn ? "error" : ""} defaultValue={cookies.person ? cookies.person.phoneNumber : ""} />
                            <input type="text" name="city" id="city" placeholder="ГРАД" className={inputIn.cityIn ? "error" : ""} defaultValue={cookies.person ? cookies.person.city : ""} />
                            <input type="text" name="officeOfSpeedy" id="officeOfSpeedy" placeholder="ОФИС НА СПИЙДИ" className={inputIn.officeOfSpeedyIn ? "error" : ""} defaultValue={cookies.person ? cookies.person.officeOfSpeedy : ""} />

                        </div >

                        <div>

                            <div>
                                <span className="checkmark">
                                    <i className="fa-solid fa-check checkpoint"></i>
                                </span>
                                <input type="checkbox" name="generalPol" id="generalPol" />
                                <p>Съгласен/а с Политиката за обработка на личните данни на Спиди</p>
                            </div>



                            <div>
                                <span className="checkmark">
                                    <i className="fa-solid fa-check checkpoint"></i>
                                </span>
                                <input type="checkbox" name="generalPol" id="generalPol" />
                                <p>С абонирането си ставам участник във всички Гивауеи<br />
                                    <span>А, ако искаш да смениш офиса за доставкта, просто се свържи с нас</span>
                                </p>

                            </div>

                        </div>


                        <div>
                            <input type="submit" value="Начин на плащене" />
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>

                    </form >
                </section >

            </main >



        </>
    )
}


export default SubscribePageStep1