import React,{useEffect,useState} from 'react';
import img2 from './grad.jpg';
import img3 from './Meditation.png';
import { fetchData,options } from './fetchData';
import { Scroll } from 'scrollex';
const Section = () => {
  const [jokes, setJokes] = useState(null);
 useEffect(() => {
    let exercisesData = [];
    const fetchExercisesData = async() => {
      exercisesData= await fetchData('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',options);
      setJokes(exercisesData);
    }
    fetchExercisesData();
  }, []) 
console.log(jokes)
    return (
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${img2})`}}>
        <div className='h-[90vh] w-[80vw] flex flex-col md:flex-row '>
          <div className='h-1/2 md:h-full w-full md:w-1/2 flex-col flex justify-around items-start '>
            <h2 className='text-5xl '>Plantation</h2>
            <div className='text-left'>the first kind of luck is blind luck where one just gets lucky beacause something completely out of control happend.<br /> This includes fortune fate</div>
            <button className='bg-red-400 text-black px-5 py-3 rounded'>Join now</button>
          </div>
          <div className='md:h-full h-1/2 w-full lg:w-1/2 flex justify-center items-center'>
            <div className=' h-3/5 w-[500px] bg-contain bg-center bg-no-repeat' style={{backgroundImage:`url(${img3})`}}></div>
          </div>
        <div>
            {jokes && <Joke jokes= {jokes}/>} 
          </div> 
   </div>
  )
}
const Joke = ({ jokes }) => {
  return (
    <div className=' flex justify-center items-center'>
      {jokes.map((item, index) => (
        <p className='text-sm w-4/5' key={index}>{item.joke}</p>
      ))}  
  </div>
 )}
export default Section
