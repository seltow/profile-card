import React from 'react'

function Button({clickHandler, btnText }) {
    return (
        <>
          <button onClick = {clickHandler} >{btnText}</button>
        </>
    )
}

export default Button;