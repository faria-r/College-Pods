import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='blur' src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{college.name}</h2>
    <p>Events:{college.events.map(i => <li className='' i={i}>{i}</li>)}</p>
    <p>Events:{college.Sports.map(i => <li className='' i={i}>{i}</li>)}</p>
    <p>Admission Deadline:{college.registered}</p>
    <p>:{college.registered}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${college._id}`}>
              <button className="btn bg-rose-700">Veiw Details</button>
            </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CollegeCard;