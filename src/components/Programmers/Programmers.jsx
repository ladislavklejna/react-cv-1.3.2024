import React, { useEffect, useState } from "react";
import "./Programmers.css";
import Forms from "../Forms/Forms";
import { MdDeleteForever } from "react-icons/md";
import { Button, Table } from "reactstrap";

const Programmers = ({ data, dataOut, hold }) => {
  const [dta, setDta] = useState(data);

  const [newPerson, setNewPerson] = useState({
    firstName: "",
    lastName: "",
    seniority: "junior",
  });

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };
  const save = () => {
    setDta((dta) => {
      return [...dta, newPerson];
    });

    setNewPerson({
      firstName: "",
      lastName: "",
      seniority: "junior",
    });
  };
  const handleDelete = (idcko) => {
    const filter = dta.filter((x) => x.id !== idcko);
    setDta(filter);
  };
  useEffect(() => {
    if (dta.length === 0) {
      setNewPerson((newPerson) => ({
        ...newPerson,
        id: 1,
      }));
    } else {
      setNewPerson((newPerson) => ({
        ...newPerson,
        id: Math.max(...dta.map((x) => x.id)) + 1,
      }));
    }
    hold(dta);
    if (dta.length > 0) {
      let lines = 0;
      dta.forEach((element) => {
        if (element.seniority === "senior") {
          lines += 200;
        } else {
          lines += 100;
        }
      });
      dataOut(lines);
    }
  }, [dta]);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Jméno</th>
            <th>Přijmení</th>
            <th>Úroveň</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dta.map((person) => (
            <tr>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.seniority}</td>
              <td>
                <Button color="danger" onClick={() => handleDelete(person.id)}>
                  <MdDeleteForever size={25} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Forms handleChange={handleChange} save={save} />
    </div>
  );
};

export default Programmers;
