import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Certificate = () => {

    var [inputs,setInputs] = useState({"sid":'',"qualification":''})
    var [Students,setStudents] = useState([]);
    var [selectedimage,setSelectedimage] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:4005/sview")
        .then(response => {
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    const InputHandler = (event) => {
        const {name,value} = event.target
        setInputs((inputs) => ({...inputs,[name]:value}))
        console.log(inputs)
      }

    const HandleImage = (event) => {
        const file = event.target.files[0];
        setSelectedimage(file)
        inputs.certphoto = file
    }  

    const SaveData = () => {
        const formdata = new FormData();
        formdata.append('sid',inputs.sid);
        formdata.append('qualification',inputs.qualification);
        formdata.append('certphoto',selectedimage);
        

        fetch ("http://localhost:4005/cnew",
        {method: "post" , body:formdata})
        .then((response) => response.json())
        .then((data) => {
            alert("Record Saved")
        })
        .catch((err)=>{
            console.log("err")
        })
    }

  return (
    <div className='s'>
      
      <br />
      Name : <select name="sid" value={inputs.sid} onChange={InputHandler}>
        {
            Students.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Sname}</option>
                )
            })
        }
             </select>
      <br />       
      Qualification : <input type="text"  name="qualification" value={inputs.qualification} onChange={InputHandler}/>     
      <br />  
      Certificate : <input type="file" onChange={HandleImage}/>
      <br />
      <br />
      <button onClick={SaveData}>SUBMIT</button>

    </div>
  )
}

export default Certificate
