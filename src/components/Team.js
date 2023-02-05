import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Team() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-Team">
        Teams and Persons
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" id="whatTeams">What are the teams working on currently?</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id="whoIs">Who is PersonXYZ ?</Dropdown.Item>
        <Dropdown.Item href="#/action-3" id="personRole">Which person has which role?</Dropdown.Item>
        <Dropdown.Item href="#/action-3" id="whichTeam">Who is in which team?</Dropdown.Item>
        <Dropdown.Item href="#/action-3" id="peopleNumber">How many people are working for us by regions?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Team;