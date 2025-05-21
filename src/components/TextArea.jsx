import React from 'react'

const TextArea = ({ name, value, handleText, sub }) => {
    return (
        <div className='flex flex-col justify-center items-center mt-2'>
            <p className='text-gray-400'>{sub}</p>
            <textarea
                name={name}
                value={value}
                onChange={e => handleText(e)}
                className='bg-gray-800 rounded-md w-70 p-1 text-gray-400 border-1 border-gray-500 h-20 min-h-20 max-h-40'
            />
        </div>
    )
}

export default TextArea