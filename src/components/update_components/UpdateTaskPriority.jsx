import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaFlushed, FaMeh, FaSmile } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PrioritySelect from './PrioritySelect';

const priorityIcon = {
    1: <FaSmile className='text-green-600 text-xl' />,
    2: <FaMeh className='text-yellow-600 text-xl' />,
    3: <FaFlushed className='text-red-500 text-xl' />,
}

const UpdateTaskPriority = ({ taskPriority, taskId }) => {
    const [updatedPriority, setUpdatedPriority] = useState(taskPriority);
    const [actualPriority, setActualPriority] = useState(taskPriority);

    const handleUpdateTaskPriority = () => {

        if (actualPriority !== updatedPriority) {   
            axios.put(`http://localhost:3000/task/update/${taskId}`, {
                priority: updatedPriority
            })
            .then(() => {
                console.log("Prioridade Atualizada com Sucesso");
                setActualPriority(updatedPriority);
            })
            .catch(err => console.error(`Erro ao atualizar a prioridade: ${err}`))
        }
    }

    useEffect(() => {
        handleUpdateTaskPriority();
    }, [updatedPriority])

    return (
        <div className='outline-1 outline-gray-400 bg-gray-950 rounded-4xl p-1 text-white text-center cursor-pointer'>
            <Tippy content={<PrioritySelect setUpdatedPriority={setUpdatedPriority}/>} interactive={true} arrow={false} placement="left" >
                <span>{priorityIcon[actualPriority]}</span>
            </Tippy>
        </div>
    )
}

export default UpdateTaskPriority