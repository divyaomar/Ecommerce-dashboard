import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Nav = () =>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <div>
            <img className='logo' alt='logo' src='data:image/png;base64,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'/>
           { auth ?   <ul className="nav-ul">
                
              <li> <Link to="/">Products</Link> </li>
                <li> <Link to="/add">Add Product</Link> </li>
                <li>  <Link to="/update">Update Product</Link> </li>
                <li>  <Link to="/profile">Profile</Link> </li> 
                <li><Link onClick={logout} to="/signup">Log out ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
}
        </div>
    )
}
export default Nav;