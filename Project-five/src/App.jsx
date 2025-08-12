import './App.css'
import Clickcount from './component/Clickcount'

function App() {
  function handleClick(){
    alert("I am clicked")
  }
  function handleMouseover(){
    alert("You are on MouseOver")
  }


  function handleonChange(e){
    console.log("input value has been changed")
    console.log("value till now: ", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();  //it will help to do not refresh the page, without this page will be refresh definatily 
    alert("Click to submit ")
  }
  return (
    
    <>
     <div>
      <p className='cursor-pointer bg-red-400 w-24' onMouseOver={handleMouseover}>Hi I am para</p>
      <button className='border m-3 px-2 py-2 rounded-full bg-gray-600 text-white cursor-pointer' onClick={handleClick}>click me</button>
      <button className='border m-3 px-2 py-2 rounded-full bg-gray-600 text-white cursor-pointer' onClick={()=>{
        alert("i got clicked")
      }}>click me</button>

      <form action="" onSubmit={handleSubmit} >
        <input className='border' type="text" onChange={handleonChange}  />
        <button className='border mx-2' type='submit'>Submit</button>
      </form>

      <Clickcount/>
     </div>
    </>
  )
}

export default App
