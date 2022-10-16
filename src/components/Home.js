import React, { useContext } from 'react';
import { AuthContext } from './Contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h3>this is home for {user?.email}</h3>
        </div>
    );
};

export default Home;