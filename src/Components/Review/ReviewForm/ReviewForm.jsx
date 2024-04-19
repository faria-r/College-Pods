import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReveiwDetailedForm from '../ReviewDetailedForm/ReveiwDetailedForm';

const ReviewForm = () => {
    const collegeReview = useLoaderData();
   const handleAddReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const clgPhoto = form.clgPhoto.value;
        const review = form.review.value;
        const id = form.id.value;
        const collegeName = form.collegeName.value;
     //creating object from form data  
        const reviewInfo = {
            name,
            email ,
            photo ,
            clgPhoto,
            review,
            id ,
            collegeName
        };
        
        fetch('https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/reviewInfo',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewInfo)
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
            form.reset();
        })
        
            };
    return (
        <div>
            {
                collegeReview.map(clg => <ReveiwDetailedForm key={clg._id} clg={clg} handleAddReview={handleAddReview}></ReveiwDetailedForm>)
            }
        </div>
    );
};

export default ReviewForm;