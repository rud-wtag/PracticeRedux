import Button from '@components/ui/Button'
import React from 'react'
import Student from '../components/Student';
import AddStudent from '../components/AddStudent';

function Home() {
  return (
    <div className='content'>
      <h1>Student list</h1>
      <Button variant='primary'>Add Student</Button>
      <Button variant='secondary'>Add Student</Button>
      <AddStudent />
    </div>
  )
}

export default Home