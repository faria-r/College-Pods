import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdmissionFormDetails from './AdmissionFormDetails';

const AdmissionForm = () => {
    const clgAdmission= useLoaderData();
    console.log(clgAdmission,'admission');

    //function to post admission data on server
    const handleAddAdmission = (event) =>{
event.prevenDefault();
const form = event.target;
const name= form.name.value;
const email = form.email.value;
const photo = form.photo.value;
const subject = form.subject.value;
const phone= form.phone.value;
const address = form.address.value;
const dob= form.dob.value;
const id = form.id.value;

const admissionInfo = {
    form ,
    name,
    email ,
    photo ,
    subject ,
    phone,
    address ,
    dob,
    id ,
};
fetch('/admissionInfo',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(admissionInfo)
})
.then(res => res.json())
.then(data =>{
    console.log(data);
    if(data.acknowledged){
        console.log('successfully stored')
    }
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