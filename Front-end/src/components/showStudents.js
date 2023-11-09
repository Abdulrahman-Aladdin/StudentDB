import { Paper } from '@mui/material';
import * as React from 'react';

const domainAddress = 'http://localhost:8080/student'

export default function ShowStudentsList() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(()=>{
    fetch(domainAddress + '/all')
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    })
  }, []);

  return (
    <div>
      <center><h1>Students Data</h1></center>
      <Paper>
        {students.map(student => 
          <Paper key={student.id} sx={{margin:'10px 10px 10px 10px', padding:'5px 5px'}}>
            <strong>Name:</strong> {student.name}, <br></br><strong>Address:</strong> {student.address}
          </Paper>)}
      </Paper>
    </div>
  );
}
