import React from 'react'

const ArchivedTaskDescription = ({ taskDescription }) => {
  return (
    <p className={`border-b-1 w-150 p-1 text-gray-400 hover:text-white cursor-pointer whitespace-pre-line`}>{taskDescription}</p>
  )
}

export default ArchivedTaskDescription