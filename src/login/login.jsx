import React, { useState } from 'react'


export default function Signin() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
 
  //Error messages start
  const [errEmail,setErrEmail] = useState();
  const [errPassword,setErrPassword] = useState();
  
  //handle function  start

  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setErrEmail('');
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setErrPassword('');
  }

  
  //email validation
  const emailValidation=(email)=>{
    return String(email).toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  }

  const handleLogin=(e)=>{
    e.preventDefault();
   if(!email)
   { setErrEmail("Enter your email");}
   else if(!emailValidation(email))
   { setErrEmail("Enter a valid email");}
   if(!password)
   { setErrPassword("Enter your password");}
   else if(password.length < 6)
   { setErrPassword("Passwords must be at least 6 characters");}
   if(email && emailValidation(email) && password && password.length>=6)
   {
      console.log(email,password);
      setEmail("");
      setPassword("");
   }
 }



    return (
      <main>

    
      <nav class="flex  py-6 ps-8" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
  
  </ol>
</nav>
      <div className='h-screen flex items-center justify-center'>
         
          <div className='my-20 flex flex-col justify-center'>
          <form className='max-w-md w-full p-8 bg-gray-900 rounded-lg shadow-lg'>
                  <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>User Email</label>
                      <input
                        onChange={handleEmail}
                        value={email} 
                      className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email"
                       />
                     {
                                errEmail && (
                                    <p className='text-red-600 text-xs font-semibold items-center gap-2 -mt-1.5'>
                                        <span className='italic font-titleFont font-extrabold text-base'>!</span> {errEmail}</p>
                                )
                             }
                  </div>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>Password</label>
                      <input 
                      onChange={handlePassword}
                      value={password}
                      className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                      />
                       {
                                errPassword && (
                                    <p className='text-red-600 flex text-xs font-semibold tracking-wide items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span> {errPassword}</p>
                                )
                             }
                  </div>
               
                  <button onClick={handleLogin} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGN IN</button>
                  
              </form>
          </div>
      </div>
      </main>
    )
  
  
}
