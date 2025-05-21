import React from 'react'

const UpdateTaskDescription = ({ taskDescription }) => {
    return (
        <div className='mt-2 text-white whitespace-pre-wrap'>
            {
                taskDescription
            }
        </div>
    )
}

export default UpdateTaskDescription