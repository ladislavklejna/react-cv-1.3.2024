import { Button, Col, Container, Row } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Programmers from "./components/Programmers/Programmers";
import Project from "./components/Project/Project";

const data = [
  { id: 1, firstName: "Ladislav", lastName: "Klejna", seniority: "junior" },
  { id: 2, firstName: "Homer", lastName: "Simpson", seniority: "junior" },
  { id: 3, firstName: "John", lastName: "117", seniority: "senior" },
  { id: 4, firstName: "Rick", lastName: "Grimes", seniority: "senior" },
];
function App() {
  const [show, setShow] = useState(true);
  const [lines, setLines] = useState();
  const [days, setDays] = useState();

  const [programmers, setProgrammers] = useState();
  const [holdData, setHoldData] = useState(data);
  const dataOut = (staff) => {
    setProgrammers(staff);
  };
  const handleHold = (updatedData) => {
    setHoldData(updatedData);
  };
  const holdDataProject = (line, day) => {
    setDays(day);
    setLines(line);
  };
  console.log(lines + "+" + days);
  return (
    <div className="App">
      <Container>
        <Row className="my-5">
          <Col className="offset-3" xs={3}>
            <Button block onClick={() => setShow(true)}>
              Seznam Programátorů
            </Button>
          </Col>
          <Col xs={3}>
            <Button block onClick={() => setShow(false)}>
              Projekt
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="offset-3" xs={6}>
            {show === true ? (
              <div>
                <Programmers
                  data={holdData}
                  dataOut={dataOut}
                  hold={handleHold}
                />
              </div>
            ) : (
              <div>
                <Project
                  data={programmers}
                  holdDataProject={holdDataProject}
                  appDays={days}
                  appLines={lines}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
