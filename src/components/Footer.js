import { Container } from "react-bootstrap"
import '../style/footer.css'


function Footer() {
  return (
    <div className="footer">
     <Container>
       <div className="linkss">
         <a href="#link" alt='link'>Register</a>
         <a href="#link" alt='link'>Forum</a>
         <a href="#link" alt='link'>Affiliate</a>
         <a href="#link" alt='link'>FAQ</a>
       </div>
       <div className="social">
         <a href="#link" alt='link'><i class="fa-brands fa-facebook-f"></i></a>
         <a href="#link" alt='link'><i class="fa-brands fa-twitter"></i></a>
         <a href="#link" alt='link'><i class="fa-brands fa-youtube"></i></a>
         <a href="#link" alt='link'><i class="fa-brands fa-dribbble"></i></a>
         <a href="#link" alt='link'><i class="fa-brands fa-linkedin-in"></i></a>
         <a href="#link" alt='link'><i class="fa-brands fa-instagram"></i></a>
       </div>
       <p><i class="fa-regular fa-copyright"></i> Mohamed Gamal. All rights reserved.</p>
     </Container>
    </div>
  )
}

export default Footer