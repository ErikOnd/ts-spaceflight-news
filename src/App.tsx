import { Container } from "react-bootstrap";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsComponent from "./components/DetailsComponent";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <BrowserRouter>
          <Routes>
            <Route element={<MainComponent />} path="/" />
            <Route element={<DetailsComponent />} path="details/:passedID" />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
