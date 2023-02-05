import Images from "./components/image";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import React,{useState} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

function App() {
  const [value, setValue]=useState('DROPDOWN_DEFAULT');
  const [cat, setCat]=useState('CAT_DEFAULT')
 
  const handleSelectTP=(e)=>{
    console.log(e);
    setCat("TP")
    setValue(e)
  }
  const handleSelectSoP=(e)=>{
    console.log(e);
    setCat("SoP")
    setValue(e)
  }
  const handleSelectSP=(e)=>{
    console.log(e);
    setCat("SP")
    setValue(e)
  }
  const handleSelectCP=(e)=>{
    console.log(e);
    setCat("CP")
    setValue(e)
  }

  const dropdownContent = {
    "CAT_DEFAULT": {"DROPDOWN_DEFAULT": {"ques": "", "is_inp_req": false}},
    "TP": {
      "whatTeams": {"ques": "What are the teams working on currently?", "is_inp_req": false},
      "whoIs": {"ques": "Who is PersonXYZ ?", "is_inp_req": true},
      "personRole": {"ques": "Which person has which role?", "is_inp_req": false},
      "whichTeam": {"ques": "Who is in which team?", "is_inp_req": false},
      "peopleNumber": {"ques": "How many people are working for us by regions?", "is_inp_req": false}
    },
    "SoP": {
      "whatSolution": {"ques": "What is XYZ?","is_inp_req": true },
      "whereDocuments": {"ques": "Where can I find the documents?", "is_inp_req": true },
      "whatBenefits": {"ques": "What is the main benefit of a solution?", "is_inp_req": false}
    },

    "SP": {
      "whichSkills": {"ques": "Who has which skils?", "is_inp_req": false},
      "whichTechnologies": {"ques": "Who is working with which technologies?", "is_inp_req": true},
      "whichHowTo": {"ques": "Which HowTo pages do we have?", "is_inp_req": false},
      "whichLevel": {"ques": "Which skill level does a person have?", "is_inp_req": true}
    },

    "CP": {
      "whichCustomers": {"ques": "Who is working with BDO / which BDO customers?", "is_inp_req": false},
      "customerContact": {"ques": "Who is in contact with which customers?", "is_inp_req": true}
    }
  }
  return (
        
    <div >
      <Images />
      <div class="text-center">
        <h1>Hello, Welcome to BDO-BX!</h1>
      </div>
      <div class="text-left">
        <h3>Please select the question of your choice:</h3>
      </div>
      <br />

      <Form>
      <Row>

        <Col>
            <Dropdown 
            alignRight
            title="Dropdown right"
            id="dropdown-menu-align-right"
            onSelect={handleSelectTP}>
              <Dropdown.Toggle variant="success" id="dropdown-Team">
                Teams and Persons
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  Object.keys(dropdownContent["TP"]).map((key, index) => ( 
                    <Dropdown.Item eventKey={key}>{dropdownContent["TP"][key]["ques"]}</Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
        </Col>

        <Col>
                <Dropdown
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleSelectSoP}>
                  <Dropdown.Toggle variant="success" id="dropdown-Solution">
              Solutions and Activities
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                {
                  Object.keys(dropdownContent["SoP"]).map((key, index) => ( 
                    <Dropdown.Item eventKey={key}>{dropdownContent["SoP"][key]["ques"]}</Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
              </Dropdown>
        </Col>
        <Col>
              <Dropdown
              alignRight
              title="Dropdown right"
              id="dropdown-menu-align-right"
              onSelect={handleSelectSP}>
                <Dropdown.Toggle variant="success" id="dropdown-Skill">
              Skills and Competancies
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  Object.keys(dropdownContent["SP"]).map((key, index) => ( 
                    <Dropdown.Item eventKey={key}>{dropdownContent["SP"][key]["ques"]}</Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
              </Dropdown>  
        </Col>
        <Col>
              <Dropdown
              alignRight
              title="Dropdown right"
              id="dropdown-menu-align-right"
              onSelect={handleSelectCP}>
                <Dropdown.Toggle variant="success" id="dropdown-Customer">
              Customer
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {
                  Object.keys(dropdownContent["CP"]).map((key, index) => ( 
                    <Dropdown.Item eventKey={key}>{dropdownContent["CP"][key]["ques"]}</Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
              </Dropdown>
        </Col>
      </Row>
    </Form>

    <br />
    
      <div class="text-left">
        <h4>Your Selected Question: {value}</h4>
        <p>{dropdownContent[cat][value]["ques"]}</p>
      </div>
      
      <div>
      {(dropdownContent[cat][value]["is_inp_req"]) ? (
        <form class="text-center">
          <label> 
            <input type="text" name="name" />
          </label>
  
          <input type="submit" value="Submit" id="input-id" />
        </form>
      ) : (<p></p>)
      }
      </div>
      
      <br />
      
      <div class="text-left">
        <h3>Please find the result of your choice:</h3>
      </div>

    </div>
  );
}

export default App;
