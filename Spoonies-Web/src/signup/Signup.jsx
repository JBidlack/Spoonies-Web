import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    // create 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPw, setVerifyPw] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const nav = useNavigate();
    const isInvalid = !email || !password || !verifyPw;


    const handleSignUp = async (e) => {

        e.preventDefault();

        try{
            if(password !== verifyPw){
                setError("Passwords do not match.");
                console.log(error);
                return;
            }
            else{
                const credential = await createUserWithEmailAndPassword(auth, email, password);
                if (credential && credential.user){

                  setSuccess("Great! You're all set! Redirecting you to the login page");
                  setTimeout(() => {
                    nav('/login');
                  }, 3000);
                }
                else{
                  setError('Something went wrong. Please contact an administrator');
                }
            }
        }
        catch (err) {
            if(err.code === 'auth/email-already-in-use'){
                setError("An account with this email already exists!");
                console.log(error);
            }
            else{
                setError(err.message);
                console.log(error);
            }
        }
        
    } 
    

  return (
    <div className='bg-blue-300'>
      <div className='min-h-[calc(100vh-56px)] flex justify-center items-center'>
        <form className='bg-blue-500 rounded-xl w-1/2 flex flex-col' onSubmit={handleSignUp}>
          <h1 className='flex justify-center text-2xl mt-10'>Sign Up!</h1>
          <div className='mt-10 flex flex-col justify-center'>
            {success && (
            <p className=' text-white flex justify-center mb-4'>{success}</p>
          )}
            <label className='ml-4 mr-2 mb-2'>E-Mail:</label>
            <div className='flex justify-center'>
              <input 
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                  }
                }
                required
                className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
            </div>
          </div>
          <div className='mt-4 mb-8 flex flex-col justify-center'>
            <label className='ml-4 mr-2 mb-2'>Password:</label>
            <div className='flex justify-center'>
              <input 
                type='password'
                value={password}
                onChange={(ex) => setPassword(ex.target.value)}
                required
                className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
              </div>
          </div>
          <div className='mt-4 mb-8 flex flex-col justify-center'>
            <label className='ml-4 mr-2 mb-2'>Verify Password:</label>
            <div className='flex justify-center'>
              <input 
                type='password'
                value={verifyPw}
                onChange={(e) => setVerifyPw(e.target.value)}
                required
                className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
              </div>
          </div>
          {error && (
            <p className='text-red-400 bg-blue-100 flex justify-center mb-4'>{error}</p>
          )}
          <div className='flex justify-center mb-10'>
            <button 
              type='submit'
              className=' bg-blue-300 hover:bg-amber-400 text-white px-4 py-2 rounded-2xl' 
              disabled={isInvalid}>
                Login
            </button>
          </div>
        </form >
      </div>
    </div>
  )
}

export default Signup