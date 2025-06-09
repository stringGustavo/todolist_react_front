import { FaFlushed, FaMeh, FaSmile } from 'react-icons/fa'

const PrioritySelect = ({ setUpdatedPriority }) => {
    return (
        <div className='flex flex-col bg-gray-800 p-3 rounded outline-1'>
            <button>
                <FaSmile onClick={() => setUpdatedPriority(1)} className='text-gray-400 hover:text-green-500 mb-2 text-2xl cursor-pointer' />
            </button>
            <button>
                <FaMeh onClick={() => setUpdatedPriority(2)} className='text-gray-400 hover:text-orange-400 mb-2 text-2xl cursor-pointer' />
            </button>
            <button>
                <FaFlushed onClick={() => setUpdatedPriority(3)} className='text-gray-400 hover:text-red-500 text-2xl cursor-pointer' />
            </button>
        </div>
    )
}

export default PrioritySelect