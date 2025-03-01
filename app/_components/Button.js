import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="p-4 rounded-lg cursor-pointer dark:bg-[#5e7381]">
            {text}
        </button>
    )
}

export default Button;
