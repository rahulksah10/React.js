import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import profile from './assets/profile.png'

function App() {
  

  return (
    <div className='bg-blue-950  flex  gap-6'>
      <UserCard name="Rahul Raj" image={profile} desc="des1" />
      <UserCard name="Rahul Kumar" image={profile} desc="des2" />
      <UserCard name="Rahul Sah" image={profile} desc="des3" />
      <UserCard name="Rahul Sah" image={profile} desc="des3" />
      <UserCard name="Rahul Sah" image={profile} desc="des3" />
    </div>
  )
}

export default App
