import React from 'react';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewProduct() {

    const[Enquiry,setEnquiry]=useState([]);

    const getData= ()=>{
            axios.get('http://localhost:9091/enquiry/getAllData')
                 .then((res)=>setEnquiry(res.data))
    }

    useEffect(getData,[])

    function deleteEnquiry(applicant_Id)
    {
        axios.delete(`http://localhost:4000/products/${applicant_Id}`)
        .then(res=>{
              if(res.status===200)
              {
                alert("Product Details removed..!")
                window.location.reload();
              }
        })

        .catch(error=>console.log(error))
    }
    useEffect(getData,[])
  return (
    <div>
        <table className='table tabel-hover'>
            <thead>
                <tr>
                    <th>applicant_Id</th>
                    <th>first_Name</th>
                    <th>last_Name</th>
                    <th>age</th>
                    <th>email</th>
                    <th>mobileNo</th>
                    <th>alternateMobileNo</th>
                    <th>pancardNo</th>
                    <th>adharNo</th>
                    <th>address</th>
                    <th>city</th>
                    <th>cibilId</th>
                    <th>cibilScore</th>
                    <th>cibilScoreDateandTime</th>
                    <th>status</th>
                     <th>remark</th>
                     <th>image</th>
                </tr>
              </thead>

              <tbody>
                {
                    Enquiry.map((Enquiry)=><tr>
                        <td>{Enquiry.applicant_Id}</td>
                        <td>{Enquiry.first_Name}</td>
                        <td>{Enquiry.last_Name}</td>
                        <td>{Enquiry.age}</td>
                        <td>{Enquiry.email}</td>
                        <td>{Enquiry.mobileNo}</td>
                        <td>{Enquiry.alternateMobileNo}</td>
                        <td>{Enquiry.pancardNo}</td>
                        <td>{Enquiry.adharNo}</td>
                        <td>{Enquiry.city}</td>
                        <td>{Enquiry.cibilId}</td>
                        <td>{Enquiry.cibilScore}</td>
                        <td>{Enquiry.cibilScoreDateandTime}</td>
                        <td>{Enquiry.status}</td>
                        <td>{Enquiry.remark}</td>
                        <td><img src={Enquiry.image} height={30}></img></td>
                        <td>
                            <button className='btn btn-outline-danger me-4'onClick={()=>deleteEnquiry(Enquiry.applicant_Id)}>
                                <i class="bi bi-trash3"></i></button>

                                <Link className='btn btn-outline-primary'to={`/edit/${Enquiry.applicant_Id}`}>
                                
                                <i class="bi bi-pencil"></i></Link>
                         </td>
                    </tr>)
                    
                }
                   
                </tbody>
        </table>
    </div>
  )
}

export default ViewProduct;