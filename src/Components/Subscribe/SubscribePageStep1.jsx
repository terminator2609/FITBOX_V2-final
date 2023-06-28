import { useEffect } from "react"
import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import useAuthManager from "../../hooks/useAuthManager"
import useClosePage from "../../hooks/useClosePage"


function SubscribePageStep1() {

    const {routerGuarding} = useAuthManager()

    const {redirectToPage} = useClosePage()

    useEffect(() => {


        routerGuarding()


    }, [])

    const getSubscriberData = (e) => {

        e.preventDefault()

    
        redirectToPage("/subscribe/step2")
        
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
                    <form action="#" method="POST" onSubmit={getSubscriberData}>
                        <div>
                            <input type="text" name="name" id="name" placeholder="ИМЕ" />
                            <input type="number" name="phoneNumber" id="phoneNumber" placeholder="ТЕЛЕФОН" />
                            <input type="text" name="city" id="city" placeholder="ГРАД" />
                            <input type="text" name="officeOfSpeedy" id="officeOfSpeedy" placeholder="ОФИС НА СПИЙДИ" />

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