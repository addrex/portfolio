import '../CSS/contact.css';



function Contact() {
    return (
        
        
<div className="siteWrapper"> 
        
    <div class="cursor-glow"></div>


{
    /* 
    Her er koden til glow-effekten til cursor som jeg ikke vet hvordan man får til i react.

    <div class="cursor-glow"></div>



<script>
    const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});
</script>
    
    
    
    
    */
}




    <div class="textContainer">
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt debitis minus similique delectus quo tempora iusto expedita, et consectetur doloribus ea veritatis dignissimos, commodi est non ipsum ab voluptate.</p>
    </div>
      
    <div className="contactPanel">
        <input type="text" placeholder="Email" required className="inputBox" />
        <input type="text" placeholder="Name" required className="inputBox" />
        <input type="text" placeholder="Subject" required className="inputBox" />
        <textarea type="text" placeholder="Message" required className="inputBox" id="message"></textarea>
        <button className="button">Send</button>
    </div>


</div> 
       
    )
}


export default Contact