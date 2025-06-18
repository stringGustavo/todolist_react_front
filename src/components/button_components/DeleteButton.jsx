import axios from 'axios';
import { FaTrash } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import useButtonContext from '../../hook/useButtonContext';

const DeleteButton = ({ taskId }) => {
    const { triggerClick } = useButtonContext();

    const deleteTask = async () => {
        await axios.delete(`http://localhost:3000/task/delete/${taskId}`)
            .catch((err) => {
                axios.isCancel(err) ? console.log("Requisição Cancelada") : undefined;
            });
    }

    return (
        <Tippy content={<p className='outline-1 p-2 rounded-md bg-gray-950'>Deletar Tarefa</p>} arrow={true} placement="top" >
            <button onClick={() => {
                deleteTask();
                triggerClick();
            }}
                type='button'
                className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 mb-4 rounded-md cursor-pointer'>
                <FaTrash className='text-red-600' />
            </button>
        </Tippy>
    )
}

export default DeleteButton