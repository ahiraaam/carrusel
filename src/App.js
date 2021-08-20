import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ maxHeight: "60vh" }}
              className="d-block w-100"
              alt="First slide"
              src="https://noticias.coches.com/wp-content/uploads/2009/05/carretera-nieve.jpg"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ maxHeight: "60vh" }}
              className="d-block w-100"
              alt="Second slide"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNfdzU9YtnYDcfA-W90-iLM-XdLwR9pDmtA&usqp=CAU"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ maxHeight: "60vh" }}
              className="d-block w-100"
              src="https://img.chilango.com/2021/01/nevada-cdmx-1967.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
