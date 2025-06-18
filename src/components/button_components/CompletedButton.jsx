import axios from 'axios';
import { FaCheck } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import useButtonContext from '../../hook/useButtonContext';
import { IoArrowUndoOutline } from 'react-icons/io5';

const CompletedButton = ({ taskId, isFinished, isArchived = false }) => {
    const { triggerClick } = useButtonContext();

    const setTaskAsCompleted = async () => {

        await axios.put(`http://localhost:3000/task/update/${taskId}`, {
            isFinished: !isFinished
        })
            .catch((err) => {
                axios.isCancel(err) ? console.log("Requisição Cancelada") : undefined;
            });
    }

    if (isFinished && isArchived)
        return (
            <Tippy content={<p className='outline-1 p-2 rounded-md bg-gray-950'>Tarefa Finalizada</p>} arrow={true} placement="top">
                <button
                    type='button'
                    className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-auto opacity-50'>
                    <FaCheck className='text-gray-500' />
                </button>
            </Tippy>
        )

    if (isFinished && !isArchived)
        return (
            <Tippy content={<p className='outline-1 p-2 rounded-md bg-gray-950'>Desmarcar Finalização</p>} arrow={true} placement="top">
                <button
                    onClick={() => {
                        setTaskAsCompleted();
                        triggerClick();
                    }}
                    type='button'
                    className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-pointer opacity-50'>
                    <IoArrowUndoOutline className='text-green-500' />
                </button>
            </Tippy>
        )

    return (
        <Tippy content={<p className='outline-1 p-2 rounded-md bg-gray-950'>Finalizar Tarefa</p>} arrow={true} placement="top">
            <button
                onClick={() => {
                    setTaskAsCompleted();
                    triggerClick();
                }}
                type='button'
                className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-pointer'>
                <FaCheck className='text-green-500' />
            </button>
        </Tippy>
    )
}

export default CompletedButton