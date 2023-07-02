import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import { useEffect, useState } from "react"
import useAuthManager from "../../hooks/useAuthManager"
import { getUserDataById } from "../../services/registration"
import useCookieManager from "../../hooks/useCookieManager"
import useClosePage from "../../hooks/useClosePage"
import useSelectCheckbox from "../../hooks/useSelectCheckbox"
import { cancelSubscribeData } from "../../services/subscribe"

function CancelPage() {

    const { routerGuarding } = useAuthManager()
    const { cookies, removeCookies } = useCookieManager()

    const { redirectToPage } = useClosePage()
    const { selectJustOne, isSelected } = useSelectCheckbox({ isProduct: false, isSupport: false, isDelivery: false, isBox: false, isPrice: false })

    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {


        routerGuarding()


        if (cookies.isLog) {

            getUserDataById(cookies.isLog.id).then((res) => {

                if (!res.ok) {


                    removeCookies("isLog")

                    redirectToPage("/")


                } else if (!res.user.subscribed) {

                    redirectToPage("/")
                }

            }).catch(() => {

                removeCookies("isLog")
                redirectToPage("/serverError")

            })
        }
    }, [])

    const cancelSubscribe = async (e) => {

        setIsSubmit(true)

        e.preventDefault()

        let data = {}

        if (isSelected.isProduct) {

            data.typeOfCancel = "Product"

        } else if (isSelected.isSupport) {

            data.typeOfCancel = "Support"

        } else if (isSelected.isDelivery) {

            data.typeOfCancel = "Delivery"

        } else if (isSelected.isBox) {

            data.typeOfCancel = "Box"

        } else if (isSelected.isPrice) {

            data.typeOfCancel = "Price"
        }

        data.id = cookies.isLog.id

        const request = await cancelSubscribeData(data).catch(() => redirectToPage("/", "unsuccessfullCancel"))

        if (request) {

            redirectToPage("/", "successfullCancel")
        }

        setIsSubmit(false)
    }

    return (

        <>

            <ScrollToTop />

            <Navigation />

            <header className="cancelPage">

                <h1>Съжаляваме!</h1>

                <h2>Кажи ни къде е проблемът?</h2>

            </header>

            <main className="cancelPage">

                <form action="#" method="POST" onSubmit={cancelSubscribe}>

                    <div>

                        <div>
                            <span className="checkmark">

                                {isSelected.isProduct ?
                                    <i className="fa-solid fa-check checkpoint"></i>
                                    : ""
                                }

                            </span>
                            <input type="checkbox" name="product" id="product" onClick={selectJustOne} />
                            <p>Продуктите</p>
                        </div>

                        <div>
                            <span className="checkmark">

                                {isSelected.isSupport ?
                                    <i className="fa-solid fa-check checkpoint"></i>
                                    : ""
                                }

                            </span>
                            <input type="checkbox" name="support" id="support" onClick={selectJustOne} />
                            <p>Обслужването</p>
                        </div>

                        <div>
                            <span className="checkmark">

                                {isSelected.isDelivery ?
                                    <i className="fa-solid fa-check checkpoint"></i>
                                    : ""
                                }

                            </span>
                            <input type="checkbox" name="delivery" id="delivery" onClick={selectJustOne} />
                            <p>Доставката</p>
                        </div>

                        <div>
                            <span className="checkmark">

                                {isSelected.isBox ?
                                    <i className="fa-solid fa-check checkpoint"></i>
                                    : ""
                                }

                            </span>
                            <input type="checkbox" name="box" id="box" onClick={selectJustOne} />
                            <p>Опаковката</p>
                        </div>

                        <div>
                            <span className="checkmark">

                                {isSelected.isPrice ?
                                    <i className="fa-solid fa-check checkpoint"></i>
                                    : ""
                                }

                            </span>
                            <input type="checkbox" name="price" id="price" onClick={selectJustOne} />
                            <p>Цената</p>
                        </div>

                    </div>

                    {isSelected.isProduct || isSelected.isSupport || isSelected.isDelivery || isSelected.isBox || isSelected.isPrice ?

                        !isSubmit ?
                            <div>
                                <input type="submit" value="Канселирай" />
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </div>

                            : ""

                        : ""
                    }

                </form>

            </main>




        </>
    )
}



export default CancelPage