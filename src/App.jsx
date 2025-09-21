
import { Suspense } from 'react'
import './App.css'
import Batmans from './Batmans'
import Counter from './Counter'
import Users from './Users'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

function App() {
    function handleClick(){
      alert('i am clicked')
    }

    const handleClick2 = () =>{
      alert('clicked 2')
    }

    const handleAdd5 = (num) => {
      const newNum = num + 5;
      alert(newNum);
    }
  return (
    <>
      
      <h1>Vite + React</h1>
    
      <Suspense fallback={<h3>Loding...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Counter></Counter>
      <Batmans></Batmans>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert('clicked 3')}>Click Me 3</button>

      <button onClick={() => handleAdd5(10)}>Click Me 4</button>
    </>
  )
}

export default App
