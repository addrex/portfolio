import '../CSS/header.css';



function Header() {
    return (
        <div className="header">
            <a className="headerElement" id="logoWrapper" href="/">
                <img src="https://i.ibb.co/bySPvFS/Daler-logo-white.png" alt="" className="logo"/>
            </a>

            <a className="headerElement" href="/contact">
                <h1>Contact</h1>
                <hr />
            </a>

            <a className="headerElement" href="/about">
                <h1>About</h1>
                <hr />
            </a>

            <a className="headerElement" id="headerLastChild" href="/services">
                <h1>Services</h1>
                <hr />
            </a>
        </div>

       
    )
}


export default Header