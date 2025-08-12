import './App.css'
import { useEffect , useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
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

  function handleclick() {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <button className='border' onClick={handleclick}>
          click me
        </button>
        count : {count}
      </div>
    </>
  )
}

export default App
