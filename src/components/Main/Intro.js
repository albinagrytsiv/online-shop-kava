import "./../../styles/Main/Intro.css"
import Coffee from "./img/Coffee-cup.png"
import Seeds from "./img/coffee-zerna.png"
import { Button } from "../../global/elements"
import { useState } from 'react';
function Intro(){
    // const style={
    //     background:"yellow",
    // }
    // <h1 className="intro__title" style={style}>Coffee</h1>
    let [modalShow,modalShowChanged]=useState(false)
    function modalToggle(){
        modalShowChanged(!modalShow)
        // modalShow=true
        console.log(modalShow)
    }
    return(

        <section className="wrapper wrapper-1">
            <div className="container section-1">
                <img className="picture-seeds"src={Seeds} />
                <div className="intro__section-1">
                    {/* <CustomP className="buttons">Hello world</CustomP> */}
                    <div className="intro__section-1__block">
                        <h1 className="intro__title">Coffee</h1>
                        <h3 className="intro__text">Exclusive Coffee Blends</h3>
                        <Button className="intro__button" onClick={modalToggle}>Contacts Us</Button>
                        {/* <h3>{String(true)}</h3>
                        <h3>{String(modalShow)}</h3> */}
                      
                    </div>
                </div>
                <div className="intro__section-2">
                    <img className="intro__image" src= {Coffee}/>
                </div>
            </div>
            {
                modalShow 
                && 
                <div className="modal-window">
                    <div className="modal-container">
                        <div className="section-footer__contacts__meil">
                            <i class="fa-solid fa-envelope-open"></i>
                            <h3 className="section-footer__contacts__meil">coffee@gmaill.com</h3>
                        </div>
                        <div className="section-footer__contacts__phone">
                            <i class="fa-solid fa-phone"></i>
                            <h3 className="section-footer__contacts__phone">+3(807)898657</h3>
                        </div>
                        <i class="close fa-solid fa-xmark" onClick={modalToggle}></i>
                    </div>  
                    
                </div>
            }
        </section>
     
    )
}

export default Intro;