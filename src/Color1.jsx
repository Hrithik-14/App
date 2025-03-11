// import { useDispatch } from 'react-redux'
// import React, { useState } from 'react'
// import { setColor } from './colorSlice'

// const Color1 = () => {

//     const [color, setColorInput] = useState("")
//     const dispatch = useDispatch()

//     const handleChange = (e) => {
//         const newColor = e.target.value
//         setColorInput(newColor)
//         dispatch(setColor(newColor))
//     }

//     return (
//         <div>
//             <input type="text" value={color} onChange={handleChange} />
//         </div>
//     )
// }

// export default Color1

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setColor } from './colorSlice'

const Color1 = () => {
    const [color, setColorInput] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        const newColor  = e.target.value
        setColorInput(newColor)
        dispatch(setColor(newColor))
    }
  return (
    <div>
    <input type="text" value={color} onChange={handleChange} />
    </div>
  )
}

export default Color1