import React from 'react';
import Srilanka from '../../../Images/Photos/srilanka.jpg'
import Maldives from '../../../Images/Photos/download1.jpg'
import Thailand from '../../../Images/Photos/thailand.jpg'
import './Photos.css'

const Photos = () => {
    return (
        <div>
            <h1>Country And Photos</h1>
        <div className="p-4 my-4 photos-container">
   <div className="card-group">
  <div class="card">
    <img src={Srilanka} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Srilanka</h5>
      <p class="card-text">It is a very beautiful country. You should go there one time in your life.</p>
    </div>
  </div>
  <div class="card">
    <img src={Maldives} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Maldives</h5>
      <p class="card-text">It is a very beautiful country. You should go there one time in your life.</p>
    </div>
  </div>
  <div class="card">
    <img src={Thailand} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Thailand</h5>
      <p class="card-text">It is a very beautiful country. You should go there one time in your life. </p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Photos;