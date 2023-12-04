import { TextField } from '@mui/material'
import './Student.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Studentedit = (props) => {
 
    var [inputs,setInputs] = useState(props.data)

   const navigate = useNavigate();

  const InputHandler = (event) => {
    const {name,value} = event.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const SaveData = () => {
     if(props.method === 'put')
    {
        axios.put("http://localhost:4005/sedit/"+inputs._id,inputs)
        .then((response)=>{
            alert("Record Updated")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
        
  }


  return (

    <div className='s'>
     
     <h2>Registration Form</h2>
     <br />

    <TextField label="Admission Number" variant="standard" name="Admno" value={inputs.Admno} onChange={InputHandler} />
    <br />
    <TextField  label="Name" variant="standard" name="Sname" value={inputs.Sname} onChange={InputHandler} />
    <br />
    <TextField label="Age" variant="standard" name="Age" value={inputs.Age} onChange={InputHandler} />
    <br />

    <br />
    Status : &nbsp;
    <select name="Status" value={inputs.Status} onChange={InputHandler} >
      <option value="ACTIVE"> ACTIVE </option>
      <option value="INACTIVE"> INACTIVE </option>
    </select>

    <br />
    <br />
    <button onClick={SaveData}> SUBMIT </button>
    </div>

  )

}

export default Studentedit
