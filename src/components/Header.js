import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

const handleSingOut=() =>{
    logOut()
    .then( () =>{})
    .catch( error => console.error(error))
}

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>welcome, {user.email}</span>}
                {
                    user?.email?
                    <button onClick={handleSingOut} className='btn btn-sm'>Log out</button>
                    : <Link to='/login'><button className='btn btn-sm'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;