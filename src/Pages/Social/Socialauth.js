import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Socialauth = () => {
    const { google_sign_in } = useContext(AuthContext)
    const Navigate = useNavigate();
    
    const handle_login = () => {

        google_sign_in()
            .then(result => {
                const user = result.user;
                console.log(user)
                Navigate('/')
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <button onClick={handle_login} varient='primary'>Continue with Google</button>
        </div>
    );
};

export default Socialauth;