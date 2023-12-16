import "./../styles/Footer.css"
import table from ".//Main/img/footer.jpeg"

function Footer(){
    return(
        <footer className="wrapper">
            <div className="container section-footer">
                <div className="section-footer__block-1">
                    <h2>Need Help?</h2>
                    <div className="section-footer__contacts__meil">
                        <i class="fa-solid fa-envelope-open"></i>
                        <h3 className="section-footer__contacts__meil">coffee@gmaill.com</h3>
                    </div>
                    <div className="section-footer__contacts__phone">
                        <i class="fa-solid fa-phone"></i>
                        <h3 className="section-footer__contacts__phone">+3(807)898657</h3>
                    </div>
                </div>
                <div className="footer__block__image">
                    <img className="footer-image" src={table}/>
                </div>
            </div>    
        </footer> 
    )
}

export default Footer;