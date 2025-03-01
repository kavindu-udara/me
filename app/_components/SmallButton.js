import React from 'react'

const SmallButton = ({text, onClick}) => {
    return (
        <button onClick={onClick} className='px-4 py-2 rounded-lg cursor-pointer dark:bg-[#5e7381]'>
            {text}
        </button>
    )
}

export default SmallButton
