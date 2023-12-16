import "./../../styles/Main/Flavours.css"
import Bagcoffee from "../Main/img/bag-of-coffee.png"
import Coffee1 from "../Main/img/coffee-1.png"
import Coffee2 from "../Main/img/coffee-2.png"
import Coffee3 from "../Main/img/coffee-1.png"
function Flavours(){
    return(
        <section className="section-4-wrapper wrapper">
            <div className="container section-4">
                <img className="image__bag-coffee" src={Bagcoffee} />
                
                    <h2 className="section-4__title">Flavours</h2>
                
                <div className="section-4__block">
                    <div className="section-4__block-1">
                        <div>
                            <img className="section-4__block-1__image" src={Coffee1} />
                        </div>
                        <div className="section-4__block-1__circle">
                            <h5 className="all-text section-4__block-1__circle-text-1">Flat white</h5>
                            <h5 className="all-text section-4__block-1__circle-text-2">$ 20.00</h5>
                            <img src=""/>
                        </div>
                    </div>
                    <div className="section-4__block-2">
                        <div>
                            <img className="section-4__block-2__image" src={Coffee2} />
                        </div>
                        <div className="section-4__block-2__circle">
                            <h5 className="all-text section-4__block-2__circle-text-1">Machiato</h5>
                            <h5 className="all-text section-4__block-2__circle-text-2">$ 20.00</h5>
                            <img src=""/>
                        </div>
                    </div>
                    <div className="section-4__block-3">
                        <div>
                            <img className="section-4__block-3__image" src={Coffee3} />
                        </div>
                        <div className="section-4__block-3__circle">
                            <h5 className="all-text section-4__block-3__circle-text-1">Americano</h5>
                            <h5 className="all-text section-4__block-3__circle-text-2">$ 50.00</h5>
                            <img src=""/>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flavours;