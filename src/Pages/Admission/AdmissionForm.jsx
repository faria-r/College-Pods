import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AdmissionFormDetails from './AdmissionFormDetails';
const AdmissionForm = () => {
    const clgAdmission= useLoaderData();
    const navigate = useNavigate();
    //function to post admission data on server
    const handleAddAdmission = (event) =>{
event.preventDefault();
const form = event.target;
const name= form.name.value;
const email = form.email.value;
const photo = form.photo.value;
const subject = form.subject.value;
const phone= form.phone.value;
const address = form.address.value;
const dob= form.dob.value;
const id = form.id.value;
const collegeName = form.collegeName.value;
const research= form.research.value;

const admissionInfos = {
    name,
    email ,
    photo ,
    subject ,
    phone,
    address ,
    dob,
    id ,
    research,
    collegeName
};

fetch('https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/admissionInfo',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(admissionInfos)
})
.then(res => res.json())
.then(data =>{
    console.log(data);
    if(data.acknowledged){
        console.log('successfully stored')
    }
    else{
        console.log('not stored')
    }
    navigate('/myCollege')
    form.reset();
})

    };

    return (
        <div>
            {
                clgAdmission.map(item => <AdmissionFormDetails key={item._id} item={item} handleAddAdmission={handleAddAdmission}></AdmissionFormDetails>)
            }
        </div>
    );
};

export default AdmissionForm;