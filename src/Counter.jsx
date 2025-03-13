import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

function Counter() {

    const count = useSelector(state => state.count.value)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter