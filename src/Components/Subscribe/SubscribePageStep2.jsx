import ScrollToTop from "../ScrollToTop/ScrollToTop"
import Navigation from "../Navigation/Navigation"


function SubscribePageStep2() {




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


export default SubscribePageStep2











