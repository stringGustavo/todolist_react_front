import axios from 'axios';
import { FaArchive } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
import useButtonContext from '../../hook/useButtonContext';

const CompletedButton = ({ taskId }) => {
    const { triggerClick } = useButtonContext();

    const SendTaskToArchive = async () => {
        await axios.put(`http://localhost:3000/task/update/${taskId}`, {
            isArchived: true
        })
            .catch((err) => {
                axios.isCancel(err) ? console.log("Requisição Cancelada") : undefined;
            });
    }

    return (
        <button onClick={() => {
            SendTaskToArchive();
            triggerClick();
        }}
            type='button'
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Arquivar Tarefa"
            className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 p-3 mb-4 rounded-md cursor-pointer'>
            <Tooltip
                style={{ backgroundColor: '#030712', color: '#fff', padding: '8px 12px' }}
                className="shadow-lg" id="my-tooltip"
            />
            <FaArchive className='text-yellow-600' />
        </button>
    )
}

export default CompletedButton