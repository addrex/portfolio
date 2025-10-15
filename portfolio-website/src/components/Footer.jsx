
import '../CSS/footer.css';
import instagram from '../assets/instagram.png'
import twitter from '../assets/x.png'
import linkedin from '../assets/linkedin.webp'





function Footer() {
    return (
        <div className="footer">
            <div className="topFooter">
                <div className="footerColumn">
                    <h1>Navigate</h1>
                    <hr />
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>About</p></a>
                    <a href="#"><p>Contact</p></a>
                    <a href="#"><p>Projects</p></a>
                </div>

                <div className="footerColumn">
                        <h1>Contact</h1>
                        <hr />
                        <p>post@portfolio.com</p>
                        <p>+47 123 45 678</p>
                        <p>123 Street, Oslo, Norway</p>
                        <p>portfolio.com</p>
                    
                </div>

                <div className="footerColumn">
                    <h1 className='mobileHidden'>Follow Us</h1>
                    <hr  />
                    <div className="socials">
                        <a href="https://instagram.com/yourusername" className="socialWrapper" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
                        <a href="https://twitter.com/yourusername" className="socialWrapper" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
                        <a href="https://linkedin.com/in/yourusername" className="socialWrapper" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                    </div>
                </div>

            </div>    
            <div className="bottomFooter">
                <p>© Copyright 2025</p>
            </div>
        </div>






    )
    
    
   
}

export default Footer 