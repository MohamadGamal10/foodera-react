import { Container, Row } from "react-bootstrap"
import "../style/Explore.css"
import i11 from '../img/11.jpg'
import i22 from '../img/22.jpg'
import i33 from '../img/33.jpg'


function Explore() {
  return (
    <>
    <div className="explore">
       <Container>
       <div className="text">
       <h3>Explore Our Foods</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br></br> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br></br> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
     </div>
        <Row>
           <div className="col-lg-4 cart">
           <img src={i11} alt="food" />
           <h4>Rainbow Vegetable Sandwich</h4>
           <p>Time: 15 - 20 Minutes | Serves: 1</p>
           <div className="price">
           <span>$10.50</span>
           <del>$11.70</del>
           <hr></hr>
           <a href="#learn" className="learn">Order Now</a>
           </div>
           </div>
           <div className="col-lg-4 cart">
           <img src={i22} alt="food" />
           <h4>Vegetarian Burger</h4>
           <p>Time: 30 - 45 Minutes | Serves: 1</p>
           <div className="price">
           <span>$9.20</span>
           <del>$10.50</del>
           <hr></hr>
           <a href="#learn" className="learn">Order Now</a>
           </div>
           </div>
           <div className="col-lg-4 cart">
           <img src={i33} alt="food" />
           <h4>Raspberry Stuffed French Toast</h4>
           <p>Time: 10 - 15 Minutes | Serves: 1</p>
           <div className="price">
           <span>$12.50</span>
           <del>$13.20</del>
           <hr></hr>
           <a href="#learn" className="learn">Order Now</a>
           </div>
           </div>
        </Row>
       </Container>
    </div>
    </>
  )
}

export default Explore