import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="p-4 rounded-lg cursor-pointer gradient-bg">
            {text}
        </button>
    )
}

export default Button;
