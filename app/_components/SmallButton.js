import React from 'react'

const SmallButton = ({text, onClick}) => {
    return (
        <button onClick={onClick} className='px-4 py-2 rounded-lg cursor-pointer  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            {text}
        </button>
    )
}

export default SmallButton
