import "./../../styles/Main/Easy.css"
import Latte from "./img/cup-of-latte.png"
import Icon1 from "./img/icon-1.png"
import Icon2 from "./img/icon-2.png"
import Icon3 from "./img/icon-3.png"
import Icon4 from "./img/icon-4.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Easy(){
    return(
        <section className="section-3-wrapper wrapper">
            <div className="container section-3">
                <h2 className="easy__title">Coffee Made Easy</h2>
                <div className="section-3__block">
                
                    <div>
                        <div className="section-3__block-1">
                            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                            {/* <i class="fa-solid fa-house"></i> */}
                            <img className="easy__icon-1" src={Icon1}/>
                            <h4>Couvement</h4>
                            <h5 className="section-3__block-1__text">A coffee blend is a mixture of two or more different origin coffee beans that are mixed together.</h5>
                        </div>
                        <div className="section-3__block-2">
                        <img className="easy__icon-2" src={Icon2}/>
                            <h4>Compotable</h4>
                            <h5 className="section-3__block-2__text">A coffee blend is a mixture of two or more different origin coffee beans that are mixed together. </h5>
                        </div>
                    </div>
                    <img className="easy__image" src={Latte}/>
                    <div>
                        <div className="section-3__block-3">
                        <img className="easy__icon-3" src={Icon3}/>
                            <h4>Better For You</h4>
                            <h5 className="section-3__block-3__text">A coffee blend is a mixture of two or more different origin coffee beans that are mixed together.</h5>
                        </div>
                        <div className="section-3__block-4">
                        <img className="easy__icon-4" src={Icon4}/>
                            <h4>Premiumm Taste</h4>
                            <h5 className="section-3__block-4__text">A coffee blend is a mixture of two or more different origin coffee beans that are mixed together. </h5>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}


export default Easy;

