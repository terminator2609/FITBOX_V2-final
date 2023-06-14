import Navigation from "../Navigation/Navigation"
import ScrollToTop from "../ScrollToTop/ScrollToTop"

function SubscribePage() {

    return (

        <>
            <ScrollToTop />

            <Navigation />

            <header className="subscribePage">
                <h1>На кого изпращаме?</h1>
            </header>

            <main className="subscribePage">

                <section>
                    <form action="#" method="POST">
                        <div>
                            <input type="text" name="name" id="name" placeholder="ИМЕ" />
                            <input type="number" name="phoneNumber" id="phoneNumber" placeholder="ТЕЛЕФОН" />
                            <input type="text" name="city" id="city" placeholder="ГРАД" />
                            <input type="text" name="office" id="office" placeholder="ОФИС НА СПИДИ" />
                        </div>

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

                    </form>
                </section>


                <section>
                    <h1>А сега, начин на плащане</h1>

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
                        <form action="">

                            <div>

                                <div>
                                    <span className="checkmark">
                                        <i className="fa-solid fa-check checkpoint"></i>
                                    </span>
                                    <input type="checkbox" name="applePay" id="applePay" />
                                    <p>Apple pay</p>
                                </div>

                                <div>
                                    <span className="checkmark">
                                        <i className="fa-solid fa-check checkpoint"></i>
                                    </span>
                                    <input type="checkbox" name="googlePay" id="googlePay" />
                                    <p>Google pay</p>
                                </div>

                                <div>
                                    <span className="checkmark">
                                        <i className="fa-solid fa-check checkpoint"></i>
                                    </span>
                                    <input type="checkbox" name="card" id="card" />
                                    <p>Кредитна/ Дебитна карта</p>
                                </div>

                            </div>

                            <div>
                                <input type="text" name="cardHolder" id="cardHolder" placeholder="КАРТОДЪРЖАТЕЛ" />
                                <input type="number" name="cardNumber" id="cardNumber" placeholder="НОМЕР НА КАРТА" />
                                <input type="number" name="cvv" id="cvv" placeholder="CVV" />
                            </div>


                            <div>
                                <input type="submit" value="Абонирай се" />
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                        </form>
                    </article>
                </section>


            </main>



        </>
    )
}


export default SubscribePage