import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState,useEffect } from 'react';
import axios from "axios";

function App() {

  const [cname, setcname] = useState('');
  const [universities, setUnivercities] = useState();
  const url = 'http://universities.hipolabs.com/search?name=middle&country=';

  // useEffect(async() => {
  //   // const uri = url+value;
  //   try{
  //     const response = await axios.get(
  //       `http://universities.hipolabs.com/search?name=middle`
  //     );

  //     if (response.status === 200) {
  //       console.log("data : ", response.data);
  //       setUnivercities(response.data);
  //       // console.log(uri);
  //     } else {
  //       console.error("Something gone wrong");
  //       console.error(response);
  //     }
  //     // console.log("set admin:", admin);
  //   } catch (error) {
  //     console.error("Something Wrong : ", error);
  //   }   
  // });


  async function handlechangecname(e) {
    const value = String(e.target.value);
    setcname(value)
    console.log(value);
    try {
      const uri = url+value;
      const response = await axios.get(
        `${uri}`
      );

      if (response.status === 200) {
        console.log("data : ", response.data);
        setUnivercities(response.data);
        console.log(uri);
      } else {
        console.error("Something gone wrong");
        console.error(response);
      }
      // console.log("set admin:", admin);
    } catch (error) {
      console.error("Something Wrong : ", error);
    }
    
  }

  return (
    <div className="App">
      {/* <div className="text-3xl font-bold underline">
      Hello world!
      </div>
      <div className='flex'>
      <input type='text' className=' text-xl flex items-center justify-center' placeholder='Enter contry name' onChange={handlechangecname} ></input>
      
      </div> */}

      <div className='mt-10' >

      <form className="max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white  sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter contry name' onChange={handlechangecname} required />
          {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        </div>
      </form>
      </div>
      {
        universities &&
      <div className='flex flex-row h-auto bg-gray-800 py-2 px-2 rounded-lg'>
        {
          universities && universities.map((university, index) => (
            <div  key={index}>
              <Card name={university.name} website={university.web_pages[0]} />
            </div>
          ))
        }
      </div>
      }


      {/* <Card name={} /> */}
    </div>
  );
}

export default App;
