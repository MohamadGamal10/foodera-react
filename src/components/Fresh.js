import { Container, Row } from 'react-bootstrap'
import '../style/Fresh.css'



function Fresh() {
  return (
    <>
    <div className="fresh">
    <div  className='overly'>
    <Container>
       <Row className='text-center'>
       <div className='col-sm-7 pd'>
       <h4>Baked fresh daily by bakers with passion.</h4>
     </div>
       <div className='col-sm-5 pd'>
       <a href="#order" className="order">Learn More</a>
     </div>
       </Row>
     </Container>
    </div>
     
    </div>
    </>
  )
}

export default Fresh