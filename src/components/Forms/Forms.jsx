import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import "./Forms.css";
function Forms({ handleChange, save }, args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleSave = () => {
    save();
    toggle();
  };
  return (
    <div>
      <Button block color="success" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Přidání</ModalHeader>
        <ModalBody>
          <FormGroup floating>
            <Input
              name="firstName"
              placeholder="Jméno"
              type="text"
              onChange={handleChange}
            />
            <Label for="firstName">Jméno</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="lastName"
              placeholder="Příjmení"
              type="text"
              onChange={handleChange}
            />
            <Label for="lastName">Příjmení</Label>
          </FormGroup>
          <Label for="seniority">Seniorita</Label>
          <Input name="seniority" type="select" onChange={handleChange}>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </Input>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSave}>
            Uložit
          </Button>
          <Button color="secondary" onClick={toggle}>
            Zrušit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Forms;
