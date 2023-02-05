import Dropdown from 'react-bootstrap/Dropdown';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Customer() {
  const [value,setValue]=useState('dropdown');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  return (
    <div className="App container">
   
      <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1" id="whichCustomers">Who is working with BDO / which BDO customers?</Dropdown.Item>
              <Dropdown.Item eventKey="option-2" id="customerContact">Who is in contact with which customers?</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>   
    </div>
  );
  
}

export default Customer;