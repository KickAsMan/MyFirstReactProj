import React, {useState} from 'react'

export default function Input({value, eve}) {
    // const [value, setValue] = useState()
  return (
    <div>
        <input 
            type="text" 
            value={value}
            onChange={event => eve(event.target.value)}
        />
    </div>
  )
}
