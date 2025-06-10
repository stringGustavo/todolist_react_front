import axios from 'axios';
import { FaArchive } from 'react-icons/fa'
import { IoArrowUndo } from "react-icons/io5";
import { Tooltip } from 'react-tooltip'
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
        <button onClick={() => {
            changeArchiveState();
            triggerClick();
        }}
            type='button'
            data-tooltip-id="my-tooltip"
            data-tooltip-content={mode ? "Arquivar Tarefa" : "Ativar Tarefa"}
            className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 mb-4 rounded-md cursor-pointer'>
            <Tooltip
                style={{ backgroundColor: '#030712', color: '#fff', padding: '8px 12px' }}
                className="shadow-lg" id="my-tooltip"
            />
            {
                mode ? <FaArchive className='text-yellow-600' /> : <IoArrowUndo className='text-yellow-600' />
            }
            
        </button>
    )
}

export default CompletedButton