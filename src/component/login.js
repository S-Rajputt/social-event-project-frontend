import axios from 'axios';
import React, { useState } from 'react';
import "./loginstyle.css";


const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

   
    
    const handleSubmit = (e) =>{
        if(password.length <= 7){
            console.log("Password must contain 8 characters");
            alert("Password must contain 8 characters");
        }
        if(email.length==0||password.length==0){
            console.log("All fields are mandatory");
            alert("All fields are mandatory");
        }
        e.preventDefault();
        if(email&&password){
        console.log({email, password});
        }
    }
        
        const handleApi =() =>{
            // console.log({email, password})
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                email: email,
                password: password
            })
            .then(result =>{
                console.log(result.data)
                alert('success')
            })
            .catch(error =>{
                alert('server err')
                console.log(error)
            })
        }
    
    

  return (
     
      <>
    <form action ="" onSubmit={handleSubmit} 
    >
       
            <div>
            
                <label htmlFor='email'>Email</label>
                <input type="text" name = "email" id="email" placeholder='Email' 
               onChange={e=>setEmail(e.target.value)}/>
             
                
            
                
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name = "password" id="password" placeholder='Password'
                 onChange={e=>setPassword(e.target.value)
                 }
                />
            </div>
            <div>
                <button type="submit" onClick={handleApi} >LOGIN</button>
            </div>
    </form>
    <div>
    </div>
    </>
  )
}

export default Login;