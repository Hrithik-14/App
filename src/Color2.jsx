// import React from 'react'
// import { useSelector } from 'react-redux'

// const Color2 = () => {

//     const color = useSelector(state => state.color.color) //color = color which define in the colorSlice color = 

//     return (
//         <div style={{width : '200px', height : '200px', backgroundColor : color}}>
//             <p>{color || "No color"}</p>
//         </div>
//     )
// }

// export default Color2

import React from 'react'
import { useSelector } from 'react-redux'

const Color2 = () => {

    const color = useSelector(state => state.color.color)
  return (
    <div style={{width:'200px', height: '200px', backgroundColor: color}}>
        <p>{color || "NO color"}</p>
    </div>
  )
}

export default Color2