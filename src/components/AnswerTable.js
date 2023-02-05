import React from 'react';
import Table from 'react-bootstrap/Table';

export default function AnswerTable({theadData, tbodyData}) {
  if (theadData?.length > 0 && tbodyData?.length > 0) {
    return ( 
      <Table striped bordered hover> 
        <thead> 
          <tr> 
            {theadData.map(heading => { 
              return <th key={heading}>{heading}</th> 
            })} 
          </tr> 
        </thead> 
        <tbody> 
          {tbodyData.map((row, index) => {
            return <tr key={index}> 
            {theadData.map((key, index) => { 
              let strRow = row[key].toString();
              if (strRow.toLowerCase().includes('http')) {
                return <td key={row[key]}><a href={row[key]}>{row[key]}</a></td> 
              } else {
                return <td key={row[key]}>{row[key]}</td> 
              }
            })}
            </tr>; 
          })}
 
        </tbody> 
      </Table> 
    ); 
  } else {
    return ('no data - execute a query');
  }
}
