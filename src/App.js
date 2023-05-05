import photo from "./dummy.jpg";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
