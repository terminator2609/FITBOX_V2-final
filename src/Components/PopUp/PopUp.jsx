import { Link } from "react-router-dom"
import "./PopUp.css"
import { useState } from "react"
import useClosePage from "../../hooks/useClosePage"

function PopUP(type) {

    const [isClosed, setIsClosed] = useState(false)
    const { closePage } = useClosePage()


    type = type.type


    const closeHandler = () => {

        closePage(type)

        setIsClosed(true)

    }




    const popUpContent = {

        successfullReg: {
            header: "Добре дошъл при нас",
            pg: "Радваме се, че стана част от голямото ни семейство. Моля потвърди регистрацията си от линка в мейла, който получи толу-що. Ако се регистрираш, за са се абонираш, можеш да го направиш и от тук след като потвърдиш",
            button: ["Абонирай се", "/subscribe"]
        },

        successfullConfirm: {
            header: "Хей, вече си в семейството",
            pg: "Твоите потребителски данни вече са в системата, така че спокойно можеш да се логнеш:",
            button: ["Вход", "/login"]
        },


        profilAlreadyConfirm: {

            header: "Този профил вече е потвърден",
            pg: "Ако не сте вие, се свържете с нас по начините по-долу:",
            button: []
        },

        profileNoExist: {

            header: "Toзи профил вече не съществува",
            pg: "Ако имате въпрос по тази тема, се свържете с нас по начините по долу:",
            button: []

        },


        successfullLogin: {

            header: "Успешно влизане във вашия профил",
            pg: "Не ти остана нищо друго, освен да натиснеш бутона:",
            button: ["Абонирай се", "/subscribe"]
        },


        404: {
            header: "404",
            pg: "Страницата, която търсеше не беше намерена",
            button: ["Начална", "/"]
        },

        successfullSubscribe: {
            header: "Успещно плащане",
            pg: "Вече нямаме търпение да изпратим твоята кутия",
            button: ["Профил", "/profile"]
        },


        unsuccessfullSubscribe: {
            header: "Проблем при плащането",
            pg: "Възникна проблем при плащането, но не се притеснявай, можеш да опиташ отново",
            button: ["Отново", "/subscribe/step2"]
        }

    }


    return (

        <>

            {isClosed ? "" :

                <section className="popUp">

                    <span className="material-symbols-outlined" onClick={closeHandler}>
                        close
                    </span>

                    <article>

                        <h1>{popUpContent[type].header}</h1>

                        <p>{popUpContent[type].pg}</p>

                        {

                            popUpContent[type].button.length > 0 ?

                                <div>
                                    <Link to={popUpContent[type].button[1]}>{popUpContent[type].button[0]}</Link>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </div>

                                : ""

                        }

                    </article>



                </section>

            }

        </>
    )

}


export default PopUP