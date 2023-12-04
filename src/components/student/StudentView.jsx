import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Studentedit from './Studentedit';

const StudentView = () => {

    var [Students,setStudents] = useState([]);
    var [selected,setSelected] = useState();
    var [update,setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:4005/sview")
        .then(response => {
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    const deletevalues=(id)=>{
        console.log("Deleted",id)
        axios.put("http://localhost:4005/updatestatus/"+id)
        .then((response)=>{
            alert("Deleted")
            window.location.reload(false);
        })
    }

    const updatevalues=(value)=>{
        console.log("Updated",value)
        setSelected(value)
        setUpdate(true)
    }

    var result =
    <div>
      
    <center>
    <Typography> <h3><b>Student View</b></h3> </Typography>
    </center>

    <TableContainer>
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Admission Number</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
              </TableRow>
          </TableHead> 

          <TableBody>
              {Students.map((value,index)=>{
                  return(
                      <TableRow key={index}>
                          <TableCell>{value.Admno}</TableCell>
                          <TableCell>{value.Sname}</TableCell>
                          <TableCell>{value.Age}</TableCell>
                          <TableCell>{value.Status}</TableCell>
                          <TableCell>
                              <ModeEditOutlineIcon color='primary' onClick={()=>updatevalues(value)}></ModeEditOutlineIcon>
                          </TableCell>
                          <TableCell>
                              <DeleteIcon color='error' onClick={()=>deletevalues(value._id)}></DeleteIcon>
                          </TableCell>
                      </TableRow>
                  )
              })}
          </TableBody>

      </Table>
    </TableContainer>

  </div>

  if(update)
  {
    result= <Studentedit data = {selected} method="put"/>
  }

  return (result)

}

export default StudentView
