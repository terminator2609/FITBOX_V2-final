import { useEffect, useState } from "react"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import Navigation from "../Navigation/Navigation"
import useAuthManager from "../../hooks/useAuthManager"
import useClosePage from "../../hooks/useClosePage"
import getFormData from "../../utilities/getFormData"
import useSelectCheckbox from "../../hooks/useSelectCheckbox"
import { isMacOs, isIOS } from 'react-device-detect';
import { postNewSubscribe, checkForSubscribe } from "../../services/subscribe"
import useCookieManager from "../../hooks/useCookieManager"


function SubscribePageStep2() {

    const { routerGuarding } = useAuthManager()
    const { selectJustOne, isSelected } = useSelectCheckbox({ isApplePay: false, isGooglePay: false, isCard: false })
    const { redirectToPage } = useClosePage()

    const { cookies, removeCookies } = useCookieManager()

    const [isSubmit, setIsSubmit] = useState(false)



    useEffect(() => {

        routerGuarding()



        if (!cookies.person) {
            redirectToPage("/subscribe")
        }


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



    const postSubscribe = async (e) => {

        setIsSubmit(true)

        e.preventDefault()

        const dataPerson = cookies.person

        const dataStep2 = getFormData(e.target)


        const { name, phoneNumber, city, officeOfSpeedy } = dataPerson
        const { applePay, googlePay, card } = dataStep2

        const data = {
            name,
            phoneNumber,
            city,
            officeOfSpeedy,
            user: cookies.isLog.id

        }


        if (applePay || googlePay) {

            const typeOfPay = applePay ? "Apple Pay" : "Google Pay"


            data.typeOfPay = typeOfPay


        } else if (card) {

            data.typeOfPay = "Credit/Debit card"
        }


        const request = await postNewSubscribe(data).catch(() => redirectToPage("/", "unsuccessfullSubscribe"))


        if (request) {

            removeCookies("person")

            redirectToPage("/", "successfullSubscribe")
        } else {
            redirectToPage("/", "unsuccessfullSubscribe")
        }


        setIsSubmit(false)
    }






    return (
        <>
            <ScrollToTop />

            <Navigation />

            <header className="subscribePage">
                <h1>А сега, начин на плащане</h1>
            </header>

            <main className="subscribePage">

                <section className="typeOfPayment">


                    <article>
                        <h2>48.88 лева/ месец</h2>

                        <div>

                            <div>
                                <i className="fa-solid fa-check checkpoint"></i>
                                <p>Безплатна доставка</p>
                            </div>

                            <div>
                                <i className="fa-solid fa-check checkpoint"></i>
                                <p>Автоматично подновяване</p>
                            </div>

                            <div>
                                <i className="fa-solid fa-check checkpoint"></i>
                                <p>Между 4 и 7 снак и лайфстайл продукта</p>
                            </div>

                            <div>
                                <i className="fa-solid fa-check checkpoint"></i>
                                <p>Ставаш участник във всички страхотни Гивауеи</p>
                            </div>

                            <div>
                                <i className="fa-solid fa-check checkpoint"></i>
                                <p>Клиентски профил</p>
                            </div>

                            <div>
                                <i className="fa-solid fa-check checkpoint"></i>
                                <p>Можеш да канселираш по всяко време</p>
                            </div>

                        </div>


                    </article>

                    <article>


                        <form action="POST" onSubmit={postSubscribe}>

                            <div>

                                {isIOS || isMacOs ?


                                    <div>
                                        <span className="checkmark">
                                            {isSelected.isApplePay ?

                                                <i className="fa-solid fa-check checkpoint"></i>

                                                : ""
                                            }
                                        </span>
                                        <input type="checkbox" name="applePay" id="applePay" onChange={selectJustOne} checked={isSelected.isApplePay} />
                                        <p>Apple pay</p>
                                    </div>

                                    : ""

                                }

                                <div>
                                    <span className="checkmark">
                                        {isSelected.isGooglePay ?

                                            <i className="fa-solid fa-check checkpoint"></i>

                                            : ""
                                        }
                                    </span>
                                    <input type="checkbox" name="googlePay" id="googlePay" onChange={selectJustOne} checked={isSelected.isGooglePay} />
                                    <p>Google pay</p>
                                </div>

                                <div>
                                    <span className="checkmark">
                                        {isSelected.isCard ?

                                            <i className="fa-solid fa-check checkpoint"></i>

                                            : ""
                                        }
                                    </span>
                                    <input type="checkbox" name="card" id="card" onChange={selectJustOne} checked={isSelected.isCard} />
                                    <p>Кредитна/ Дебитна карта</p>
                                </div>

                            </div>


                            {isSelected.isCard ?


                                <div className="bankingData">
                                    <input type="text" name="cardHolder" id="cardHolder" placeholder="КАРТОДЪРЖАТЕЛ" />
                                    <input type="text" name="cardNumber" id="cardNumber" placeholder="НОМЕР НА КАРТА" maxLength="19" />
                                    <div>
                                        <input type="text" name="cvv" id="cvv" placeholder="CVV" maxLength="3" />
                                        <input type="text" name="dateOfExpiry" id="monthOfExpiry" placeholder="MM/YY" maxLength="5" />

                                    </div>

                                </div>

                                : ""
                            }



                            {isSelected.isApplePay || isSelected.isGooglePay || isSelected.isCard ?


                                !isSubmit ?

                                    <div className="button">
                                        <input type="submit" value="Абонирай се" />
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </div>

                                    : ""

                                : ""
                            }

                        </form>
                    </article>
                </section>

            </main>
        </>
    )
}


export default SubscribePageStep2











