import "./../../styles/Main/Knowledge.css"
import Coffee__2 from ".//img/coffee-image-2.jpeg"
import { Button } from "../../global/elements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Knowledge(){
    return(
        <section className="wrapper section-2__main">
            <div className="container section-2">
                <div className="section-2__block-1">
                    <img className="section-2__image" src={Coffee__2}/>
                    <Button className="section-2__button-1"><i class="fa-solid fa-arrow-right"></i></Button>
                </div>
                <div className="section-2__block-2">
                    <h2 className="knowledge__title">The knowledge behind how to process coffee</h2>
                    <h4 className="knowledge__text-1">A coffee blend is a mixture of two or more different origin coffee beans that are mixed together. The idea behind blends is to take the best qualities from different origins to create a smooth, well-balanced tasting coffee. </h4>
                    <h4 className="knowledge__text-2">Coffee blends have taken a backseat to current Third Wave coffee trends. These days, the talk is all about unique and exotic single origin coffees. But even though blends don’t get the same hype, they are an equally important style of coffee.</h4>
                    <Button className="knowledge__button">Read More</Button>
                </div>
            </div>    
        </section>
    )
}

export default Knowledge;