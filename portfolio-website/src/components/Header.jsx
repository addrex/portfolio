import '../CSS/header.css';
import menu from '../assets/menu.svg'





function showSidebar() {

const sidebarJS = document.querySelector('.sidebar');


        sidebarJS.classList.toggle('active');


}








function Header() {
    return (

        

<div className="headerWrapper">
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

        <button className='headerButton' onClick={showSidebar}><img src={menu} alt="menu" /></button>



            

    </div>




    <div className="sidebar">
        <a className="sidebarElement" href="/contact">
            <h1>Contact</h1>
            <hr />
        </a>

        <a className="sidebarElement" href="/about">
            <h1>About</h1>
            <hr />
        </a>

        <a className="sidebarElement" href="/services">
            <h1>Services</h1>
            <hr />
        </a>

    </div>
</div>

        


       
    )
}


export default Header