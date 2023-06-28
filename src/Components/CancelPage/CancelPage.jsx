import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import { useEffect } from "react"
import useAuthManager from "../../hooks/useAuthManager"

function CancelPage() {

    const {routerGuarding} = useAuthManager()

    useEffect(() => {


        routerGuarding()
        

    }, [])


    return (

        <>

            <ScrollToTop />

            <Navigation />

            <header className="cancelPage">

                <h1>Съжаляваме!</h1>

                <h2>Кажи ни къде е проблемът?</h2>

            </header>

            <main className="cancelPage">

                <form action="#" method="POST">

                    <div>

                        <div>
                            <span className="checkmark">
                                <i className="fa-solid fa-check checkpoint"></i>
                            </span>
                            <input type="checkbox" name="generalPol" id="generalPol" />
                            <p>Продуктите</p>
                        </div>

                        <div>
                            <span className="checkmark">
                                <i className="fa-solid fa-check checkpoint"></i>
                            </span>
                            <input type="checkbox" name="generalPol" id="generalPol" />
                            <p>Обслужването</p>
                        </div>

                        <div>
                            <span className="checkmark">
                                <i className="fa-solid fa-check checkpoint"></i>
                            </span>
                            <input type="checkbox" name="generalPol" id="generalPol" />
                            <p>Доставката</p>
                        </div>

                        <div>
                            <span className="checkmark">
                                <i className="fa-solid fa-check checkpoint"></i>
                            </span>
                            <input type="checkbox" name="generalPol" id="generalPol" />
                            <p>Опаковката</p>
                        </div>

                        <div>
                            <span className="checkmark">
                                <i className="fa-solid fa-check checkpoint"></i>
                            </span>
                            <input type="checkbox" name="generalPol" id="generalPol" />
                            <p>Цената</p>
                        </div>

                    </div>


                    <div>
                        <input type="submit" value="Канселирай" />
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </form>

            </main>




        </>
    )
}



export default CancelPage