import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
import useButtonContext from '../hook/useButtonContext';

const DeleteButton = ({ deleteTaskId }) => {
    const { triggerClick } = useButtonContext();

    const deleteById = async () => {
        await axios.delete(`http://localhost:3000/task/delete/${deleteTaskId}`)
            .catch((err) => {
                axios.isCancel(err) ? console.log("Requisição Cancelada") : undefined;
            });
    }

    return (
        <button onClick={() => {
            deleteById();
            triggerClick();
        }}
            type='button'
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Apagar Tarefa"
            className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-pointer'>
            <Tooltip
                style={{ backgroundColor: '#030712', color: '#fff', padding: '8px 12px' }}
                className="shadow-lg" id="my-tooltip"
            />
            <FaTrash className='text-red-600' />
        </button>
    )
}

export default DeleteButton