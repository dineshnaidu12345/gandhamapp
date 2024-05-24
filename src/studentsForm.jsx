import { useFormik } from "formik";
import React from "react";
 import * as Yup from 'yup';
function StudentForm(){
    var studentsForm=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            password:'',
            age:''
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
            .required('requried')
            .max(10,"maximum 10 characters"),
            lastname: Yup.string()
            .required("requried").max(10,"max 10 char"),
            password: Yup.string()
            .required("requried").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"password in valid"),
            age: Yup.string().max(2,"age must be 1 to 99").required("requried")

            
            
          }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return(
        <div>
            <form onSubmit={studentsForm.handleSubmit} >
           <input type="text" name="firstname" onChange={studentsForm.handleChange} onBlur={studentsForm.handleBlur} />
           <div>
           <b>{studentsForm.touched.firstname&&studentsForm.errors.firstname&&"Please fill the firstname"}</b> 
           </div>
           
           <input type="text" name="lastname" onChange={studentsForm.handleChange} />
           <br />
           <div>
           <b>{studentsForm.errors.lastname&&"Please fill the firstname"}</b> 

           </div>
           <input type="text" name="password" onChange={studentsForm.handleChange} />
           <br />
           <b>{studentsForm.errors.password&&"Please fill the firstname"}</b> <br />

           <input type="text" name="age" onChange={studentsForm.handleChange} />
           <br />
           <b>{studentsForm.errors.age&&"Please fill the firstname"}</b> <br /> 

           <button>Show Data</button>


            </form>
            {JSON.stringify(studentsForm.errors)}
           
        </div>
    )
}
export default StudentForm