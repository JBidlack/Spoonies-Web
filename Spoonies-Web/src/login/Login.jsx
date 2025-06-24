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
        setPersistence(auth, browserSessionPersistence);
        await signInWithEmailAndPassword(auth, email, password)
            .then((credential) => {
              const user = credential.user;
            })

      }
      catch (err) {
        switch(err.code){
          case 'auth/user-disabled':
            setError("Your account has been disabled. Please contact an administrator.");
            break;
          case 'auth/wrong-password':
            setError("That email or password is incorrect");
            break;
          case 'auth/invalid-email':
            setError("That email or password is incorrect");
            break;
        }
      }
    }

    return (
      <div className='bg-blue-300'>
        <div className='min-h-[calc(100vh-56px)] flex justify-center items-center'>
          <form 
            className='bg-blue-500 rounded-xl w-1/2 flex flex-col'
            onSubmit={handleLogin}>
              <h1 className='flex justify-center text-2xl mt-10'>
                  Log-In Here
              </h1>
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
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='w-3/4 p-2 rounded-sm bg-white cursor-text'/>
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