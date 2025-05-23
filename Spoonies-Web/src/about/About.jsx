import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-w-screen m-8'>
        <div className='flex flex-col my-10'>
            <h1 className=' text-2xl mb-4'>Where does the Spoon Theory come from?</h1>
            <div className='flex justify-center'>
                <p className='flex flex-col max-w-1/2 '>The Spoon Theory comes from Christine Miserandino. The explaination here does not do justice to the original explaination.
                    I encourage everyone to give the article a read. The original can be found:
                    <br></br>
                    <a className='mt-2 font-bold border-b-2 w-10' href='https://www.butyoudontlooksick.com/articles/written-by-christine/the-spoon-theory/'>HERE</a>
                </p>
            </div>
        </div>
        <div className='flex flex-col'>
            <h1 className=' text-2xl mb-4'>What is the Spoon Theory?</h1>
            <div className='flex justify-center'>
                <p className='flex max-w-1/2 '>The Spoon Theory, at its core, is essentially a simple way to visualize and manage energy. Primarily used by people with 
                    chronic health issues, the concept has been adopted by many as a way to express how everyday activities affect them. 
                    <br></br>
                    <br></br>
                    Every person is a little different. 
                    <br></br>
                    <br></br>
                    Some have more spoons, some have less. The number of spoons can vary from person to person based on their condition, health
                    and any other number of factors. Everything a person does takes some number of "spoons" something simple like eating a meal or taking a shower may only 
                    take 1 spoon, while something like going to work, or even going to a party or walking with friends might take 5, 7, or more! At the end of the day, 
                    the goal is to not have run out of spoons! We can indeeed go over the number of spoons we have, but it then borrows from tomorrows spoons.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About