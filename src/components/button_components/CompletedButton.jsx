import axios from 'axios';
import { FaCheck } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
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
            <button
                type='button'
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Tarefa Finalizada"
                className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-auto opacity-50'>
                <Tooltip
                    style={{ backgroundColor: '#030712', color: '#fff', padding: '8px 12px' }}
                    className="shadow-lg" id="my-tooltip"
                />
                <FaCheck className='text-gray-500' />
            </button>
        )

    if (isFinished && !isArchived)
        return (
            <button
                onClick={() => {
                    setTaskAsCompleted();
                    triggerClick();
                }}
                type='button'
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Desmarcar Finalização"
                className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-pointer opacity-50'>
                <Tooltip
                    style={{ backgroundColor: '#030712', color: '#fff', padding: '8px 12px' }}
                    className="shadow-lg" id="my-tooltip"
                />
                <IoArrowUndoOutline className='text-green-500' />
            </button>
        )

    return (
        <button
            onClick={() => {
                setTaskAsCompleted();
                triggerClick();
            }}
            type='button'
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Finalizar Tarefa"
            className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 rounded-md cursor-pointer'>
            <Tooltip
                style={{ backgroundColor: '#030712', color: '#fff', padding: '8px 12px' }}
                className="shadow-lg" id="my-tooltip"
            />
            <FaCheck className='text-green-500' />
        </button>
    )
}

export default CompletedButton