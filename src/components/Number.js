import { Container, Row } from "react-bootstrap"
import "../style/Numer.css"



function Number() {
  return (
    <div className="number">
     <Container>
     <Row>
       <div className="col-md-3">
       <p>1287+</p>
       <h2>SAVINGS</h2>
       </div>
       <div className="col-md-3">
       <p>5786+</p>
       <h2>PHOTOS</h2>
       </div>
       <div className="col-md-3">
       <p>1440+</p>
       <h2>ROCKETS</h2>
       </div>
       <div className="col-md-3">
       <p>7110+</p>
       <h2>GLOBES</h2>
       </div>
     </Row>
    </Container>
    </div>
   
  )
}

export default Number