import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Tours Page</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        {user?.email ?
          <Link className="nav-link active" to="/myorders">My orders</Link>:
          []}
        {user?.email ?
          <Link className="nav-link active" to="/manageallbookings">Manage All Bookings</Link>:
          []}
        {user?.email ?
          <Link className="nav-link active" to="/addnewtour">Add A New Tour</Link>:
          []}
        <li className="nav-item">
          {user?.email ?
            <button onClick={logOut} className="btn btn-warning">LogOut 
             </button>:
            
            <Link className="nav-link active" to="/login">Login</Link>}
        </li>

        <span className="navbar-text">
        Signed in as: <a href="#login">{user.displayName}</a>
      </span>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;