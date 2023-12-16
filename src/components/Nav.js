import "./../styles/Nav.css"

function Nav(){
    return(
        <header className="wrapper">
            <div className="container header">
                <h1 className="header__title">Picup</h1>

                <nav className="header__menu">
                    <ul className="menu">
                        <li><a href="#" className="menu__item">About us</a></li>
                        <li><a href="#" className="menu__item">Menu</a></li>
                        <li><a href="#" className="menu__item">Home</a></li>
                        <li><a href="#" className="menu__item">Shop</a></li>
                        <li><a href="#" className="menu__item">Gallery</a></li>
                        <li><a href="#" className="menu__item">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>  
    )
}

export default Nav;