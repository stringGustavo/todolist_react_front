import React from 'react'
import { FaFlushed, FaMeh, FaSmile } from 'react-icons/fa'

const priorityIcon = {
    1: <FaSmile className='text-green-600 text-xl' />,
    2: <FaMeh className='text-yellow-600 text-xl' />,
    3: <FaFlushed className='text-red-500 text-xl' />,
  }

const UpdateTaskPriority = ({ taskPriority }) => {
    return (
        <div className='outline-1 outline-gray-400 bg-gray-950 h-7 rounded-4xl p-1 text-white text-center'>
            <span>{priorityIcon[parseInt(taskPriority)]}</span>
        </div>
    )
}

export default UpdateTaskPriority