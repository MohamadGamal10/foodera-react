import {  Container, Row } from "react-bootstrap"
import "../style/Header.css"




function Header() {
  return (
    <header>
      <Container>
      <Row>
         <div className="col-md-8 text">
           <h3>Good food choices are good investments.</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
           <div className="links">
           <a href="#order" className="order">Order Now <i class="fa-solid fa-basket-shopping"></i> </a>
           <a href="#learn" className="learn">Learn More <i class="fa-solid fa-chevron-down fa-rotate-270"></i> </a>
           </div>
         </div>
         <div className="col-md-4">
         
         </div>
      </Row>
    </Container>
    </header>
  )
}

export default Header