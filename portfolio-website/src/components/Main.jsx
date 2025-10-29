import '../CSS/main.css';
import leo from '../assets/portrait.jpg'



function Main() {
    return (
        
        
        <div className="mainWrapper">
            <div className="mainTextWrapper">
                <p>Hello, I'm Leo,</p>
                <h1>Web</h1>
                <h1>Developer</h1>
                <p>Based in Norway</p>
                <a className='mainBtn'>About Me</a>
            </div>

            <div className="mainImageWrapper">
                <div className="orange-shape"></div>
                <img src={leo} alt="LinkedIn" />
            </div>


        </div>





    )

}

export default Main