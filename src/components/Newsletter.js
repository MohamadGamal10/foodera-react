import { Container, Row } from 'react-bootstrap'
import '../style/Newsletter.css'


function Newsletter() {
  return (
    <>
     <div className="news">
       <Container className='text-center'>
       <h1>Hurry up! Subscribe our newsletter <br></br>
       and get 25% Off</h1>
       <p>Limited time offer for this month. No credit card required.</p>
       </Container>
       <Container>

      <Row>
      <div className='col-md-8 col-sm-12 one'>
      <input  placeholder="Email Adress Here"  />
      </div>
      <div className='col-md-4 col-sm-12 two'>
      <button>Subscribe</button>
      </div>
    </Row>

       </Container>

     </div>
    </>
  )
}

export default Newsletter