import React, { useEffect, useState } from "react";
import { Input, Label, FormGroup, Button } from "reactstrap";
import "./Project.css";
const Project = ({ data, holdDataProject, appLines, appDays }) => {
  const [lines, setLines] = useState(appLines);
  const [days, setDays] = useState(appDays);
  const [disable, setDisable] = useState(true);
  const handleChange = (e) => {
    if (e.target.name === "lines") {
      setLines(parseInt(e.target.value));
    } else if (e.target.name === "days") {
      setDays(parseInt(e.target.value));
    }
  };
  console.log(data);
  useEffect(() => {
    if (lines != null && days != null) {
      if (lines > data * days) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    } else {
      setDisable(true);
    }
    holdDataProject(lines, days);
  }, [lines, days]);
  return (
    <div>
      <FormGroup floating>
        <Input
          name="lines"
          placeholder="Celkem řádků aplikace"
          type="number"
          onChange={handleChange}
          value={lines}
        />
        <Label for="lines">Celkem řádků aplikace</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          name="days"
          placeholder="Počet dnů"
          type="number"
          onChange={handleChange}
          value={days}
        />
        <Label for="days">Počet dnů</Label>
      </FormGroup>
      {lines > 0 && (
        <h5 className="text-center">
          Nejkratší možný počet dnů pro schválení je{" "}
          <span className="text-bold">{Math.ceil(lines / data)}</span>
        </h5>
      )}
      <Button
        block
        className="mt-5"
        disabled={disable}
        color={lines <= data * days ? "success" : "danger"}
      >
        Schválit plán
      </Button>
    </div>
  );
};

export default Project;
