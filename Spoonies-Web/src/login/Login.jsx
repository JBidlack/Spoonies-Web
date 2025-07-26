/* eslint-disable no-unused-vars */
import '../App.css';
import { auth } from  '../firebase/firebase'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

    // eslint-disable-next-line no-unused-vars
    const handleLogin = async (e) => {
      e.preventDefault();

      try{
        setError(''); 
        setPersistence(auth, browserSessionPersistence);

        await signInWithEmailAndPassword(auth, email, password)
            .then((credential) => {
              const userCred = credential.user;
              console.log(userCred.accessToken);
              if (userCred.accessToken){
                nav('/dashboard', userCred.accessToken);
              }
            });

        
      }
      catch (err) {
        switch(err.code){
          case 'auth/user-disabled':
            setError("Your account has been disabled. Please contact an administrator.");
            break;
          case 'auth/wrong-password':
            setError("That email or password is incorrect");
            break;
          case 'auth/invalid-credential':
            setError("That email or password is incorrect");
            break;
        }
      }
    }

    return (
      <div className='bg-blue-300'>
        <div className='min-h-[calc(100vh-56px)] flex justify-center items-center'>
          <form 
            className='bg-blue-500 rounded-xl w-1/3 flex flex-col'
            onSubmit={handleLogin}>
              <h1 className='flex justify-center text-2xl mt-10'>
                  Log-In Here
              </h1>
              {error && <span className='text-lg text-red-600'>{error}</span>}
              <div className='mt-10 flex justify-center'>
                <label className='mr-2 content-center-safe'>Username:</label>
                <input 
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className=' my-6 p-2 rounded-sm bg-white cursor-text'/>
              </div>
              <div className='mb-8 flex justify-center'>
                <label className='mr-2 content-center-safe'>Password:</label>
                <input 
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='my-6 p-2 rounded-sm bg-white cursor-text'/>
              </div>
              <div className='flex justify-center mb-10'>
                <button 
                  type='submit'
                  className=' bg-blue-300 hover:bg-amber-400 text-white px-4 py-2 rounded-2xl' 
                >
                  Login
                </button>
              </div>
          </form>
        </div>
      </div>
    )
  }


export default Login