import { useNavigate } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"

function ForgotenPassPage() {

    const navigation = useNavigate()


    const redirectToPage = () => {

        navigation("/newPass")

    }



    return (

        <>
            <ScrollToTop />
            
            <Navigation />


            <header className="forgotenPassPage">
                <h1>Забравена парола</h1>
                <p>Моля напиши имейла си, на който ще получиш линк за потвърждение</p>
            </header>

            <main className="forgotenPassPage">
                <form action="#" method="POST">

                    <div>
                        <input type="text" name="email" id="email" placeholder="ИМЕЙЛ" />
                    </div>


                    <div>
                        <input type="submit" id="sendButton" value="Изпрати" onClick={redirectToPage} />
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </form>
            </main>



        </>
    )
}


export default ForgotenPassPage