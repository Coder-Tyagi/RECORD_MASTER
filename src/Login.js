import React, { useState } from 'react'
import './Login.css'
import img from './img/background.jpg';
import createHistory from 'history/createBrowserHistory';
import { getDefaultNormalizer } from '@testing-library/react';

const history = createHistory();
export default function Login() {
   
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [auth, setAuth] = useState(true)
    
function Submit(){
    if(username==='akshay@gmail.com' && password==='1234'){
        history.push('/dashboard');
    }
    else{
        alert("INVALID USER");
    }
     
}
    return (
        

        
        <div> <div id="bg"> <h1>LOGIN PAGE</h1><img src={img} /></div>
           
          
            <form onSubmit={Submit} >  
                <div class="form-field">

             <input onChange={(e)=>setUsername(e.target.value)} type="email" placeholder="Email / Username" required />
                                      
                </div>

                <div className="form-field">
                    <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
                </div>

                <div className="form-field">
                    <button className="btn" type="submit">Log in</button>
                </div>
            </form>

        </div>
    )
}