import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import { useEffect, useState } from "react"
import useAuthManager from "../../hooks/useAuthManager"
import useCookieManager from "../../hooks/useCookieManager"
import { getUserDataById } from "../../services/registration"
import useClosePage from "../../hooks/useClosePage"

function ProfilePage() {

    const { routerGuarding } = useAuthManager()
    const { removeCookies, cookies, addCookie } = useCookieManager()
    const { redirectToPage } = useClosePage()
    const [userInfo, setUserInfo] = useState("")



    const logoutHandler = () => {

        removeCookies("isLog")



    }

    useEffect(() => {


        routerGuarding()

        if (cookies.isLog) {

            getUserDataById(cookies.isLog.id).then((res) => {

                let data = res.user

                let name = data.name.split(" ")

                data.name = name[0]

                if (data.subscribed) {

                    const newDate = new Date(data.subscribedTable.dateSubscribe)

                    console.log(data)

                    data.subscribedTable.dateSubscribe = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()
                }



                setUserInfo(data)


            })
        }


    }, [])


    return (

        <>

            <ScrollToTop />

            <Navigation />


            <header className="profilePage">

                <h1>Здравей, {userInfo.name}</h1>

                <article>
                    <p>Статус: {userInfo.subscribed ? "Абониран" : "Без абонамент"}</p>
                    <p>Дата на плащане: {userInfo.subscribed ? `${userInfo.subscribedTable.dateSubscribe} всеки месец` : "00 всеки месец"}</p>
                </article>

            </header>

            <main className="profilePage">

                {userInfo.subscribed ?

                    <div>
                        <Link to="/cancel">Канселирай</Link>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>

                    :

                    <div>
                        <Link to="/subscribe">Абонирай се</Link>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>


                }



                <div>
                    <Link to="/" onClick={logoutHandler}>Изход</Link>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>


            </main>



        </>
    )

}


export default ProfilePage