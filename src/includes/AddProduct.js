import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function AddProduct() {
      const {register,handleSubmit,setValue,reset} =useForm();
      const {applicant_Id}=useParams()

    const saveData=Enquiry=>{
      if(!applicant_Id){
          axios.post('http://localhost:9091/enquiry/getAllData',Enquiry)
          .then(res=>{
             if(res.status===201){
              alert("Product Details Saved...!")
              reset();
             }

          })
          .catch(error=>console.log(error));
        }
        else{
              axios.put(`http://localhost:9091/enquiry/getAllData/${applicant_Id}`,Enquiry)
              .then(res=>{
                    if(res.status===200){
                      alert("Product Details updated...!")
                    }
              })
              .catch(error=>console.log(error));
        }
    }
   
    const getEditData=()=>{
      if(applicant_Id)
      {
           axios.get(`http://localhost:9091/enquiry/getAllData${applicant_Id}`)
           .then(res=>{
                   for(let prop in res.data)
                   {
                    setValue(prop,res.data[prop])
                      // console.log(prop + " =>  " +res.data[prop])
                   }
           })
      }
    }

    useEffect(()=>getEditData,[]);
  return (
    <div className='d-flex justify-content-center'>
          <div className='bg-white w-50 mt-3 p-3'>
           

          <h1 className='text-center fs-3 text-primary'>Add Enquiry Details...!</h1>
          <form onSubmit={handleSubmit(saveData)}>
            <div>
                <label className='form-label'>Enter  applicant_Id</label>
                <input type="text" {...register('applicant_Id')} className='form-control border border-dark'></input>
            </div>

            <div>
                <label className='form-label'>Enter first_Name</label>
                <input type="text" {...register('first_Name')} className='form-control border border-dark'></input>
            </div>

            <div>
                <label className='form-label'>Enter last_Name</label>
                <input type="text" {...register('last_Name')} className='form-control border border-dark'></input>
            </div>

            <div>
                <label className='form-label'>Enter age</label>
                <input type="number" {...register('age')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter email</label>
                <input type="text" {...register('email')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter mobileNo</label>
                <input type="number" {...register('mobileNo')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter alternateMobileNo</label>
                <input type="number" {...register('alternateMobileNo')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter pancardNo</label>
                <input type="text" {...register('pancardNo')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter adharNo</label>
                <input type="number" {...register('adharNo')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter address</label>
                <input type="text" {...register('address')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter city</label>
                <input type="text" {...register('city')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter cibilId</label>
                <input type="number" {...register('cibilId')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter cibilScore</label>
                <input type="number" {...register('cibilScore')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter cibilScoreDateandTime</label>
                <input type="number" {...register('cibilScoreDateandTime')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter status</label>
                <input type="text" {...register('status')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter remark</label>
                <input type="text" {...register('remark')} className='form-control border border-dark'></input>
          </div>
          


          <button className='btn btn-success mt-3'>Submit</button>
          </form>
          </div>
    </div>
  )
}

export default AddProduct;