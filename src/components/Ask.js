import { Container, Row } from "react-bootstrap";
import '../style/Ask.css'

function Ask() {
  return (
    <>
  <div  className="ask">
  <Container>
      <div className="fre text-center">
            <h3>Frequently Asked Questions</h3>
      </div>
        <Row>
          <div className="col-md-6">
            <div className="first">
              <h4>~ Is Foodera Bread really baked fresh each day?</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="second">
            <h4>~ Can I order your products online?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics,
              a large language.
            </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="first">
              <h4>~ Do you bake breads containing animal fats or products?</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="second">
            <h4>~ When are you opening a shop near me?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics,
              a large language.
            </p>
            </div>
          </div>
        </Row>
      </Container>
  </div>
      
    </>
  );
}

export default Ask;
