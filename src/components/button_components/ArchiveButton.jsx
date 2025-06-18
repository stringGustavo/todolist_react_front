import axios from 'axios';
import { FaArchive } from 'react-icons/fa'
import { IoArrowUndo } from "react-icons/io5";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import useButtonContext from '../../hook/useButtonContext';

const CompletedButton = ({ taskId, mode }) => {
    const { triggerClick } = useButtonContext();

    const changeArchiveState = async () => {
        await axios.put(`http://localhost:3000/task/update/${taskId}`, {
            isArchived: mode,
        })
            .catch((err) => {
                axios.isCancel(err) ? console.log("Requisição Cancelada") : undefined;
            });
    }

    return (
        <Tippy content={<p className='outline-1 p-2 rounded-md bg-gray-950'>{mode ? "Arquivar Tarefa" : "Ativar Tarefa"}</p>} arrow={true} placement="top">
            <button onClick={() => {
                changeArchiveState();
                triggerClick();
            }}
                type='button'
                className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 mb-4 rounded-md cursor-pointer'>
                {
                    mode ?
                        <FaArchive className='text-yellow-600' /> : <IoArrowUndo className='text-yellow-600' />
                }

            </button>
        </Tippy>
    )
}

export default CompletedButton