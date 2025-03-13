import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from './datatSlice'

function Data() {
    const dispatch = useDispatch()
    const {tasks, loading, error} = useSelector((state) => state.task)

    useEffect(() => {
        dispatch(fetchTasks())
    },[dispatch])
    if(loading) return <p>loading</p>
    if(error) return <p>Error : {error}</p>
  return (
    <div>
        <h1>Task List</h1>
        <ul>
            {tasks.map((task) =>(
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>

    </div>
  )
}

export default Data