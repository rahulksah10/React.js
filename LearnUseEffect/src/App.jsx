import './App.css'
import { useEffect, useState } from 'react';
import Loggercomp from './component/Loggercomp';
import Timercomp from './component/Timercomp';
import Datafetcher from './component/Datafetcher';
import ResizeComp from './component/ResizeComp';

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  //use effect
  //first -> side_effect function 
  //secon -> clean-Up function
  //third->comma seperated dependencies list
  //useeffect snnipet below
  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   };
  // }, [third]);

  // variation : 1
  // runs on every render
  //------------>
  // useEffect(() => {
  //   alert("i will come on first render")
  // });


  // variation : 2 
  //that runs on only first order
  //--------->
  //  useEffect(() => {
  //     alert("I wil run on only first render")
  //  }, []);


  // variation : 3
  // useEffect(() => {
  //  alert("i will run every time when count is updated")
  // }, [count]);

  // variation: 4
  // multiple dependencies
  //------------>
  // useEffect(() => {
  //    alert("i will run every time when count/total is updated")
  // }, [count, total]);

  // variation: 5
  // this time add a cleanup function
  //------------>

  // useEffect(() => {
  //   alert("count/total is updated")
  //   return () => {
  //     alert("I will run when state is unmounted( purana state change hoga tb)")
  //   };
  // }, [count, total]);


  // function handleclick() {
  //   setCount(count + 1)
  // }

  // function handletotal() {
  //   setTotal(total + 1)
  // }


  return (
    <>

     {/* <Loggercomp /> */}
     {/* <Timercomp /> */}
     {/* <Datafetcher /> */}
     <ResizeComp />
        {/* <div>
          <button className='border' onClick={handleclick}>

            count update
          </button>
          <br />
          count : {count}
          <br />
          <button className='border' onClick={handletotal}>
            total update
          </button>
          <br />
          Total : {total}
        </div> */}
    </>
  )
}

export default App
