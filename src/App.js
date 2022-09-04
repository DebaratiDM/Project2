import { Container } from "react-bootstrap";
import AreaOfReactangle from "./Component/AreaOfRectangle";
import AreaOfCircle from "./Component/AreaofCircle";
import Header from "./Component/Header";
import Grid from "./Component/Grid";
import "./App.css";
function App() {
  return (
    <div className="amarContainer">
      <Header />
      <Grid />
      <Container>
        <AreaOfReactangle />
        <AreaOfCircle />
      </Container>
    </div>
  );
}

export default App;
