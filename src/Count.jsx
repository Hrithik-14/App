import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

function Count() {

    const dispatch = useDispatch()
    const count = useSelector(state =>state.counter.value)
  return (
    <div>
        <p>Count :{count}</p>
        <button onClick={() =>dispatch(increment())}>+</button>
        <button onClick={() =>dispatch(decrement())}>-</button>
        <button onClick={() =>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Count