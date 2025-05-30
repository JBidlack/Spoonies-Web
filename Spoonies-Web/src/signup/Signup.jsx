import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase/firebase';

const Signup = () => {

    // create 
    const [email, setEmail] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [verifyPw, setVerifyPw] = useState('');
    const [error, setError] = useState('');
    const isInvalid = !email || !password || !verifyPw || password !== verifyPw;


    const handleSignUp = async (e) => {

        e.preventDefault();

        try{

            if(password !== verifyPw){
                setError("Passwords do not match.");
                return;
            }
            else{
                await createUserWithEmailAndPassword(auth, email, password);
            }
        }
        catch (err) {
            if(err.code === 'auth/email-already-in-use'){
                setError("An account with this email already exists!");
            }
            else{
                setError(err.message);
            }
        }
    } 
    

  return (
    <div className='bg-blue-300'>
        <div className='min-h-[calc(100vh-56px)] flex justify-center items-center'>
          <form className='bg-blue-500 rounded-xl w-1/2 flex flex-col'>
              <h1 className='flex justify-center text-2xl mt-10'>Sign Up!</h1>
              <div className='mt-10 flex justify-center'>
                <label className='mr-2'>Username:</label>
                <input 
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
              </div>
              <div className='mt-4 mb-8 flex justify-center'>
                <label className='mr-2'>Password:</label>
                <input 
                  type='password'
                  value={password}
                  onChange={(e) => e.setPassword(e.target.value)}
                  required
                  className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
              </div>
              <div className='mt-4 mb-8 flex justify-center'>
                <label className='mr-2'>Verify Password:</label>
                <input 
                  type='password'
                  value={password}
                  onChange={(e) => e.setVerifyPw(e.target.value)}
                  required
                  className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
              </div>
              {error && (
                <p className='text-red-400 text center mb-4'>{error}</p>
              )}
              <div className='flex justify-center mb-10'>
                <button 
                  type='submit'
                  className=' bg-blue-300 hover:bg-amber-400 text-white px-4 py-2 rounded-2xl disabled:opacity-50 cursor-not-allowed' 
                  onSubmit={handleSignUp}
                  disabled={isInvalid}>
                    Login
                  </button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Signup