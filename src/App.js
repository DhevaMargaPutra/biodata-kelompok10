import photo from "./dummy.jpg";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <h1 className="title">Tugas IMK</h1>
      <Carousel>
        <Carousel.Item>
          <div className="c-item">
            <Card className="ca">
              <Card.Img variant="top" src={photo} />
              <Card.Body className="c-body">
                <Card.Title className="ca-title">Dheva Marga Putra</Card.Title>
                <Card.Text className="ca-text">G.231.21.0058</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="c-item">
            <Card className="ca">
              <Card.Img variant="top" src={photo} />
              <Card.Body className="c-body">
                <Card.Title className="ca-title">Dheva Marga Putra</Card.Title>
                <Card.Text className="ca-text">G.231.21.0058</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
