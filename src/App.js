import Images from "./components/image";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


import React,{useState} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
// import {useEffect} from 'react';
import AnswerTable from "./components/AnswerTable";
import Table from "react-bootstrap/esm/Table";

function App() {
  const [value, setValue]=useState('DROPDOWN_DEFAULT');
  const [cat, setCat]=useState('CAT_DEFAULT');
  const [answer, setAnswer]=useState(null);
  const [queryCode, setQueryCode]=useState(null);
  const [updateCode, setUpdateCode]=useState(null);
 
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

  const getHeadings = (data) => {
    console.log('before');
    console.log(data?.length > 0);
    if (data?.length > 0) {
      console.log('here');
      return Object.keys(data[0]);
    } else {
      return null
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('qid', value);
    if (event.target.elements.query) {
      formData.append('iv', event.target.elements.query.value);
    }
    axios.post('http://localhost:5000/dataKG', formData)
    .then(res => {
      console.log(res.data);
      setAnswer(res.data);
    })
    .catch(err => console.log(err))
  }

  const handleSubmitForQueryCode=(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('qid', value);
    if (event.target.elements.query) {
      formData.append('iv', event.target.elements.query.value);
    }
    axios.post('http://localhost:5000/queryKG', formData)
    .then(resQueryKG => {
      console.log(resQueryKG.data);
      setQueryCode(resQueryKG.data);
    })
    .catch(err => console.log(err))
  }

  const handleSubmitForSendingQuery=(event)=>{
    event.preventDefault();
    const formData = new FormData();
    if (document.getElementById('sparqlQueryUpdateId').value) {
      formData.append('updateId', document.getElementById('sparqlQueryUpdateId').value);
    }
    axios.post('http://localhost:5000/updateKG', formData)
    .then(resUpdateKG => {
      console.log(resUpdateKG.data);
      setUpdateCode(resUpdateKG.data);
    })
    .catch(err => console.log(err))
  }
  
  const dropdownContent =  {
    "CAT_DEFAULT": {"DROPDOWN_DEFAULT": {"ques": "", "is_inp_req": false}},
    "TP": {
      "teamsexist": {"ques": "What are the teams existing currently?", "is_inp_req": false},
      "teamsworking": {"ques": "What are the teams and their solutions currently?", "is_inp_req": true},
      "personXYZ": {"ques": "Who is a particular Person?", "is_inp_req": true},
      "hasrole": {"ques": "Who has a particular role?", "is_inp_req": true},
      "personrole": {"ques": "Which role is for particular Person?", "is_inp_req": true},
      "whoiswhichteam": {"ques": "Who is in which team?", "is_inp_req": true},
      "countrycount": {"ques": "How many people are working for us by regions?", "is_inp_req": false}
    },
    "SoP": {
      "solutionlink": {"ques": "What is a particular solution?","is_inp_req": true },
      "solutiondocumentlink": {"ques": "Where can I find the documents of Solution?", "is_inp_req": true },
      "solutionbenefit": {"ques": "What is the main benefit of a solution?", "is_inp_req": true }
    },

    "SP": {
      "whohaswhichskills": {"ques": "Who has which skills?","is_inp_req": true },
      "howto": {"ques": "Which HowTo pages do we have?", "is_inp_req": true },
      "personskill": {"ques": "Which skill level does a person have?", "is_inp_req": true }
    },

    "CP": {
      "BDO": {"ques": "Who is working with BDO / which BDO customers?","is_inp_req": false },
      "customercontact": {"ques": "Who is in contact with which customers?", "is_inp_req": false }
    }
  }
  return (
        
    <div>

      <div>
        <Images />
      </div>
      <br />

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
              Skills and Competencies
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
        <h3>Your Selected Question: </h3>   {/*{value}*/}
        <p>{dropdownContent[cat][value]["ques"]}</p>
      </div>
      
      <div>
        <form class="text-center" onSubmit={handleSubmit}>
        {(dropdownContent[cat][value]["is_inp_req"]) ? (
        
          <label> 
            <input type="text" name="query" />
          </label>
  
        ) : (<p></p>)
        }
      
        <input type="submit" value="Submit Query" id="input-id" />
        </form>
      </div>
      <br />
      
      <div class="text-left">
        <h3>Please find the result of your choice:</h3>
        <AnswerTable theadData={getHeadings(answer)} tbodyData={answer}/>
      </div>
      <br />  

      <div>
        <form class="text-center" onSubmit={handleSubmitForQueryCode}>
        <input type="submit" value="Get SPARQL Query" id="inputQueryId" />
        </form>
      </div>
      <br />

      <div class="text-left">
        <Table striped bordered hover> 
        <thead> 
          <tr> SPARQL Query Content </tr> 
        </thead> 
        <tbody> 
          <tr> {queryCode} </tr>
        </tbody> 
      </Table>
      <br />
      </div>

      <div class="text-left">
        <h3>Enter you changes you want to commit</h3>
        <form class="text-center" onSubmit={handleSubmitForSendingQuery}>
          <label>
            <textarea id="sparqlQueryUpdateId" name="sparqlQueryUpdate" cols="150" rows="8">enter sparql statement here according to: https://www.w3.org/TR/sparql11-update/</textarea> 
	        </label>
          <br />
          <input type="submit" value="Update" id="inputUpdateid" />
        </form>
        <Table striped bordered hover> 
        <thead> 
          <tr> SPARQL Update Content </tr> 
        </thead> 
        <tbody> 
          <tr> {updateCode} </tr>
        </tbody> 
      </Table>
      </div>

    </div>
  );
}

export default App;
