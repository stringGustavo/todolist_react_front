import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaFlushed, FaMeh, FaSmile } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'

const priorityIcon = {
    1: <FaSmile className='text-green-600 text-xl' />,
    2: <FaMeh className='text-yellow-600 text-xl' />,
    3: <FaFlushed className='text-red-500 text-xl' />,
}

const UpdateTaskPriority = ({ taskPriority, taskId }) => {
    const [updatedPriority, setUpdatedPriority] = useState(taskPriority);
    const [actualPriority, setActualPriority] = useState(taskPriority);

    const handleUpdateTaskPriority = () => {

        axios.put(`http://localhost:3000/task/update/${taskId}`, {
            priority: updatedPriority
        })
            .then(console.log("Prioridade Atualizada com Sucesso"))
            .then(setActualPriority(updatedPriority))
            .catch(err => console.error(`Erro ao atualizar a prioridade: ${err}`))
    }

    useEffect(() => {
        handleUpdateTaskPriority();
    }, [updatedPriority])

    return (
        <div className='outline-1 outline-gray-400 bg-gray-950 h-7 rounded-4xl p-1 text-white text-center'>
            <a id="clickable">{priorityIcon[parseInt(actualPriority)]}</a>
            <Tooltip className='flex gap-4' anchorSelect="#clickable" clickable place="top">
                <button>
                    <FaSmile onClick={() => setUpdatedPriority(1)} className='text-green-500 mb-2 text-xl cursor-pointer' />
                </button>
                <button>
                    <FaFlushed onClick={() => setUpdatedPriority(2)} className='text-orange-400 mb-2 text-xl cursor-pointer' />
                </button>
                <button>
                    <FaMeh onClick={() => setUpdatedPriority(3)} className='text-red-500 mb-2 text-xl cursor-pointer' />
                </button>
            </Tooltip>
        </div>
    )
}

export default UpdateTaskPriority