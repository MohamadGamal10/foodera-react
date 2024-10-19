import { Container, Row } from "react-bootstrap"
import '../style/About.css'
import i3 from '../img/3.png'
import i2 from '../img/2.png'




function About() {
  return (
    <>
    <Container className="features">
     <Row>
       <div className="col-lg-7 img">
         <img src={i2} alt="features" />
       </div>
       <div className="col-lg-5 text">
       <h3>We pride ourselves on making real food from the best ingredients.</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
       <a href="#learn" className="learn">Learn More</a>
       </div>
     </Row>
    </Container>

    <Container>
    <Row className="hand">
    <div className="col-lg-5 text">
    <h3>We make everything by hand with the best possible ingredients.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <ul>
      <li><i class="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpat.</li>
      <li><i class="fa-solid fa-check"></i> Erat volutpat aliquet imperdiet.</li>
      <li><i class="fa-solid fa-check"></i> purus a odio finibus bibendum.</li>
    </ul>
    <a href="#learn" className="learn">Learn More</a>
    </div>
    <div className="col-lg-7 image">
    <img src={i3} alt="features" />
    </div>
  </Row>

    </Container>

    <div className="story">
    <div className="story-text">
    <h1>When a man's stomach is full it makes no <br></br>
    difference whether he is rich or poor.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br></br>
    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
    </p>
    <a href="#story" alt="y"><i class="fa-solid fa-caret-right"></i> Watch Our Story</a>
    </div>
    </div>
    </>
  )
}

export default About