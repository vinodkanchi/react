import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Solution() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-Solution">
      Solutions and Activities
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" id="whatSolution">What is XYZ?</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id="whereDocuments">Where can I find the documents?</Dropdown.Item>
        <Dropdown.Item href="#/action-3" id="whatBenefits">What is the main benefit of a solution?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Solution;