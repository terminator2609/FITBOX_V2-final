import { Link, useLocation } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"
import { useEffect } from "react"
import { postConfirmationRegistration, getUserDataById } from "../../services/registration"
import { useState } from "react"
import PopUp from "../PopUp/PopUp"
import { useSearchParams } from "react-router-dom"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import useCookieManager from "../../hooks/useCookieManager"
import useClosePage from "../../hooks/useClosePage"



function HomePage() {

    const [confirmStatus, setConfirmStatus] = useState({ successfullConfirm: false, profilNoExist: false, profilAlreadyConfirm: false })
    const [searchParams, setSearchParams] = useSearchParams()
    const { cookies, removeCookies } = useCookieManager()
    const location = useLocation()
    const [isSubscribed, setIsSubcribed] = useState(false)
    const { redirectToPage } = useClosePage()



    useEffect(() => {


        if (location.search.includes("confirmed")) {

            const id = location.hash.substring(4)


            getUserDataById(id).then((result) => {


                if (result.ok) {

                    const user = result.user

                    if (user.confirmed) {

                        setConfirmStatus({ successfullConfirm: false, profilNoExist: false, profilAlreadyConfirm: true })

                    } else {

                        postConfirmationRegistration(user)

                        setConfirmStatus({ successfullConfirm: true, profilNoExist: false, profilAlreadyConfirm: false })
                    }


                } else {

                    setConfirmStatus({ successfullConfirm: false, profilNoExist: true, profilAlreadyConfirm: false })
                }
            })


            searchParams.delete("confirmed")
            searchParams.delete("id")

            setSearchParams(searchParams)


        }


        if (cookies.isLog) {

            getUserDataById(cookies.isLog.id).then((res) => {

                if (res.ok) {
                    if (res.user.subscribed) {
                        setIsSubcribed(true)
                    } else {
                        setIsSubcribed(false)
                    }
                } else {
                    removeCookies("isLog")
                    redirectToPage("/")
                }


            }).catch(() => {

                removeCookies("isLog")
                redirectToPage("/")
            })
        }

        // eslint-disable-next-line
    }, [])


    return (

        <>

            <ScrollToTop />


            <Navigation />


            <header className="homePage">

                <article>
                    <h1>Preorder-ът</h1>
                    <h1>е тук!</h1>
                    <p>Край на чакането,
                        тук можеш да се абонираш само от 04 до 18 юни
                        за своята премиум снак, мийл и лайфстайл кутия, която ще бъде при теб в началото на юли</p>
                </article>

                <article>
                    <img src="/media/box-1.jpg" alt="box-1" />
                    <img src="/media/box-2.jpg" alt="box-2" />
                    <img src="/media/box-3.jpg" alt="box-3" />
                </article>

                <article>

                    <Link to={cookies.isLog ? "/subscribe" : "/login"}>Абонирай се</Link>
                    <i className="fa-solid fa-arrow-right-long"></i>

                </article>
            </header>

            <main className="homePage">
                <section>

                    <article>
                        <h1>Вдъхновени от страха да бъдем посредствени!</h1>

                        <p>Абонаментната кутия
                            FITBOX струва 48.88 лева
                            на месец, като в нея ще
                            откриваш между 4 и 7
                            снак и лайфстайл
                            продукта, специално селектирани
                            според месечната тематиката
                        </p>
                    </article>


                    <article>
                        <h1>Всеки може да е инфлуенсър</h1>
                        <p>Вашия отзив е много важен за нас, заеми мястото на режисьор и заснеми ънбоксимг видео, как вземаш
                            пратката си, как си приготвяш мийл с продуктите или каквото ти хрумне, а най-добрите продукции ще
                            бъдат качени за всички
                        </p>
                    </article>

                    <article>

                        <Link>Изпрати</Link>
                        <i className="fa-solid fa-arrow-right-long"></i>

                    </article>

                </section>

                <section>
                    <h1>Визията</h1>
                    <h1>Эко-Луксозна</h1>
                    <img src="/media/box-1.jpg" alt="box-1" />
                    <img src="/media/box-2.jpg" alt="box-2" />
                    <p>Въпреки че опаковката е от голямо значение, все пак природата е по-важна. Поради това, всички материали,
                        с които работим са биоразградими, защото 92% от случаите опаковката завършва в боклука
                    </p>

                </section>

                <section>

                    <article>
                        <h1>След натискане на бутон</h1>
                        <div>
                            <Link to={cookies.isLog ? "/subscribe" : "/login"}>Абонирай се</Link>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </article>


                    <article>
                        <div>
                            <h2>.01</h2>
                            <p>Въвеждаш данните си и избираш начин на плащане</p>
                        </div>

                        <div>
                            <h2>.02</h2>
                            <p>FITBOX пристига при теб с безплатна доставка</p>
                        </div>

                        <div>
                            <h2>.03</h2>
                            <p>Винаги можеш да канселираш автоматично подновяващия се абонамент</p>
                        </div>
                    </article>
                </section>

                <section>
                    <article>
                        <h1>А,</h1>
                        <h1>плащането?</h1>
                        <p>FITBOX работи с изцяло виртуален, защитен метод на плащане с възобновяем характер. Например заплащаш
                            своя FITBOX през май и го получаваш в началото на месец юни...
                        </p>
                    </article>

                    <article>
                        <img src="/media/home-img.jpg" alt="home-img" />
                        <img src="/media/home-img-2.jpg" alt="home-img-2" />
                        <img src="/media/home-img-3.jpg" alt="home-img-3" />
                    </article>

                    <article>
                        <h1>От Инста постове до лайфстайл</h1>
                        <p>За нас начинът на живот е като избора между постовете и реалността. Често скролвайки, всеки от нас си е
                            мечтал да бъде на мястото на някого, но всъщност промяната започва отвътре. Правилните селфкеър и
                            лайфстайл могат да превърнат всеки пост в реалност
                        </p>
                    </article>
                </section>

                <section>



                    {cookies.isLog ?

                        <>

                            <article>

                                <Link to="/profile">Профил</Link>
                                <i className="fa-solid fa-arrow-right-long"></i>

                            </article>


                            {isSubscribed ?

                                <article>

                                    <Link to="/cancel">Канселирай</Link>
                                    <i className="fa-solid fa-arrow-right-long"></i>

                                </article>

                                : ""
                            }



                        </>

                        :

                        <article>

                            <Link to="/login">Вход</Link>
                            <i className="fa-solid fa-arrow-right-long"></i>

                        </article>


                    }



                </section>

                <section>
                    <h1>Партньори</h1>

                    <article>
                        <img src="/media/partner.png" alt="partner" />
                    </article>

                    <p>*Ако желаеш да продаваш с FITBOX, просто ни пиши на office@myfitbox.bg</p>
                </section>
            </main>

            <Footer />

            {confirmStatus.successfullConfirm ? <PopUp type="successfullConfirm" /> : ""}
            {confirmStatus.profilAlreadyConfirm ? <PopUp type="profilAlreadyConfirm" /> : ""}
            {confirmStatus.profilNoExist ? <PopUp type="profileNoExist" /> : ""}


            {location.state === "successfullLogin" ? <PopUp type="successfullLogin" /> : ""}

            {location.state === "successfullSubscribe" ? <PopUp type="successfullSubscribe" /> : ""}

            {location.state === "unsuccessfullSubscribe" ? <PopUp type="unsuccessfullSubscribe" /> : ""}

            {location.state === "alreadyExistSubscribe" ? <PopUp type="alreadyExistSubscribe" /> : ""}

            {location.state === "successfullCancel" ? <PopUp type="successfullCancel" /> : ""}

            {location.state === "successfullPassChange" ? <PopUp type="successfullPassChange" /> : ""}

            {location.state === "noValidNewPassLink" ? <PopUp type="noValidNewPassLink" /> : ""}

            {location.state === "profileNoExist" ? <PopUp type="profileNoExist" /> : ""}
        </>
    )
}


export default HomePage