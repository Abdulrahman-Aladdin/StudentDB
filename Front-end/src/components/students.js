import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShowStudentsList from './showStudents';

const formStyle = {
  left : '10%',
  width: "80%",
  top : '20%',
  position  : 'absolute',
}

const inFormStyle = {
  width: '80%',
  margin: '2% 10%',
}

const buttonStyle = {
  margin: '2% 42%',
  width: '16%',
}

const domainAddress = 'http://localhost:8080/student'

function sendData(student) {
  fetch(domainAddress + '/add',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(student)
  }).then(() => {console.log('done')})
}

export default function Students() {
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + ' ' + address);
    const student = {"name":name, "address":address};
    sendData(student);
  }

  return (
    <div>
    <Box
      component="form"
      sx={formStyle}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" noWrap component="div" sx={{margin:'2% 35%', color:'rgb(155, 155, 155)'}}>
        <center><u><b>Add Student</b></u></center>
      </Typography>
      <TextField id="outlined-basic" label="Name" required variant="outlined" sx={inFormStyle} 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" required label="Address" variant="outlined" sx={inFormStyle} 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant='contained' color='success' sx={buttonStyle} type='submit'>Submit</Button>
      <ShowStudentsList/>
    </Box>
    </div>
  );
}
