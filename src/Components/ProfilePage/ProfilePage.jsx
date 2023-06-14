import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"



function ProfilePage() {

    return (

        <>

            <ScrollToTop />

            <Navigation />


            <header className="profilePage">

                <h1>Здравей, Велина</h1>

                <article>
                    <p>Статус: Абониран</p>
                    <p>Дата на плащане: 08 всеки месец</p>
                </article>

            </header>

            <main className="profilePage">

                <Link to="/cancel">Канселирай</Link>
                <i className="fa-solid fa-arrow-right-long"></i>


            </main>



        </>
    )

}


export default ProfilePage