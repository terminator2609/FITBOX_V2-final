import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"

function NewPassPage() {

    return (

        <>

        <ScrollToTop />

            <Navigation />



            <header className="newPassPage">
                <h1>Нова парола</h1>
                <p>Моля напиши своята нова парола</p>
            </header>

            <main className="newPassPage">
                <form action="#" method="POST">

                    <div>
                        <input type="password" name="password" id="password" placeholder="НОВА ПАРОЛА"/>
                    </div>


                    <div>
                        <input type="submit" value="Запази"/>
                            <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </form>
            </main>



        </>
    )
}


export default NewPassPage